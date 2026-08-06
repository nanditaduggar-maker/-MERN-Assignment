const express = require("express");
const connectDB = require("./db");
const StudentModel =require("./userModel");
const ProductModel = require("./productModel");
const Joi = require("joi");
const app = express();

app.use(express.json());

app.post("/createStudent", async (req, res) => {
    try {
        const { Name, course, stream, roll, email } = req.body;

        console.log(req.body);

        const studentData = {
            Name: Name,
            course: course,
            stream: stream,
            roll: roll,
            email: email
        };

        await StudentModel.create(studentData);

        res.send("Student successfully created");
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error creating student");
    }
});

app.get("/getAllStudents",async(req,res) => {
    try {
        let allStudent = await StudentModel.find({});
        res.json(allStudent);
    }
    catch (err){
        console.log(err);
    } 
});

app.post("/register", async (req, res) => {
  try {
    const validationSchema = Joi.object({
      Name: Joi.string().min(2).max(64).required(),
      email: Joi.string().max(150).required(),
      password: Joi.string().min(5).max(24).required(),
    });

    const { error } = validationSchema.validate(req.body);

    if (error) {
      return res.end("Cannot create user");
    }     

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.end("details are necessary");
    }
    let existEmail = await RegisterModel.findOne({ email: email });
    console.log(existEmail);

    if (!existEmail) {
      const hashPassword = await bcrypt.hash(password, 10);
      await RegisterModel.create({
        name: name,
        email: email,
        password: hashPassword,
      });
    } else {
      return res.end("Email already exist");
    }
    return res.end("User Registered Successfuly");
  } catch (error) {
    console.log(error);
    return res.end("cannot create user");
  }
});


app.post("/createProduct", async (req, res) => {
    try {
      const validationSchema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        description: Joi.string().max(250).required(),
        price: Joi.number().min(0).required(),
        category: Joi.string().max(64).required(),
        SKU: Joi.string().max(64).required()
      });
      const { error } = validationSchema.validate(req.body);
      
      if (error) {
        return res.status(400).send("Invalid product data");
      }
      const productExist = await ProductModel.findOne({ SKU: req.body.SKU });
      if (productExist) {
        return res.status(400).send("Product with this SKU already exists");
      }

      const { name, description, price, category, SKU } = req.body;
      const product = await ProductModel.create({ name, description, price, category, SKU });
      return res.status(201).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Error creating product");
    }
});
connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server starts on port 3000");
        }); 
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
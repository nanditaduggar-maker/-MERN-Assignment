const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"]);
const mongoose = require('mongoose');
const { connect } = require('node:http2');
const url = "mongodb+srv://nanditaduggar_db_user:SRTN0qVU6CX8Kd8k@cluster0.qvdfrvw.mongodb.net/Assignment1";

const connectDB = async () => {
    await mongoose.connect(url);
    console.log("database connection established")
};

module.exports = connectDB;

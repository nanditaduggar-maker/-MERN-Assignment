// import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from './assets/vite.svg'
// //import heroImg from './assets/hero.png'
// // import Signup from './Component/Signup';
// // import Loginpage from './Component/Loginpage';
// // import Auth from './Component/Auth';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css'
//  import Loginpage from './Component/Loginpage';
// import Home from './Component/Home';
// // import Loginpage from './Component/Loginpage';


// function HomePage() {
//   return (
//     <>
// {/* <Loginpage/> */}
//     <Home />

//     </>

//   )
// }

// function App() {
// //   const [count, setCount] = useState(0)

//    return (
//      <>
//      {/* <section id="center"> */}
//      <Loginpage/>
//   <Home/>
 
// {/* //     <div>
// //       <BrowserRouter>
// //         <Routes>
// //           {/* <Route path='/' element={<Loginpage/>}/>
// //           <Route path='/signup' element={<Signup/>}/>
// //           <Route path='/home' element={<HomePage/>}/> */}

// {/* //         </Routes> */}
// {/*   
// //         </BrowserRouter> */}
// {/* //       </div> */}
// {/* //         </section> */} */
// </>
// )
//    }
// export default App;

// import React from 'react'
// import Header from './Component/Header/Header'
// import Navbar from './Component/Navbar/Navbar'
// import About from './Component/About/About'
// import Fotter from './Component/Fotter/Fotter'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Header/>
//       <About/>
//       <Fotter/>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const name="nandu";
// let student={
//   id:101,
//   name:"chotu",
//   age:20,
//   course:"b.tech",
//   city:"udaipur",
// };
// let student1={
//    id:102,
//    name:"gullu",
//    age:20,
//    course:"b.tech",
//    city:"udaipur",
// };
//   return (
//     <div>
//       hello{"nandu"}
// <h3>Student name:{student.name} </h3>
// <h3>student name:{student1.name}</h3>
// {"1,2,3"}
//     </div>
//   )
// }

// export default App
//share data through props
// import React from 'react'
// import About from './Component/About/About'
// const App = () => {
//   let name="chotu";
//   let age=20;
//     return (
//     <div>
//       <h3> sharing data throudh app component to about component</h3>
//       <About name="chotu" age={20}/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import About from './Component/About/About';

// const App = () => {
//   let name="chotu";
//   let age=20;
//   return (
//     <div>
//       <h1> Event Handling</h1>
//       <About>
//       {name} {age} {"children.jsx"}
//       </About>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   const display =(value) =>{
//     console.log(value);
//     console.log("Button Clicked");
//   };
//   return (
//     <div>
//       <h1>Events</h1>
//       <button onClick={()=> display("Data Send")}></button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Contact from './Component/Contact/Contact'

// const App = () => {
//   const display =(value)=>{
// console.log(value);
//   };
//   return (
//     <div>
//       <h1>events</h1>
//       <Contact getData={display}/>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [value,setValue]=useState(10);
//   const display = (value) => {
//     console.log(value);
//   };
//   return (
//     <div>
//       <h1>State value: {value}</h1>
//       <button onClick={() => setValue(value+1)}>increment</button>
//       <button onClick={()=> setValue(value-1)}>Decrement</button>
//       <button onClick={()=> setValue(10)}>Back</button>
//     </div>
//   )
// }

// export default App


//project 
// import React from 'react'
// import Home from './Project/Home/Home'
// import Services from './Project/Services/Services'
// // import Work from './Project/work/Work'
// import About from './Project/About/About'
// // import Reviews from './Project/Reviews/Reviews'
// // import Blog from './Project/Blog/Blog'
// import Contact from './Project/Contact/Contact'
// import Navbar from './Project/Navbar/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Services/>
//       {/* <Work/> */}
//       <About/>
//       {/* <Reviews/> */}
//       {/* <Blog/> */}
//       <Contact/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import StudentCard from './StudentCard/StudentCard'
// const App = () => {
//   return (
//     <div>
//       <StudentCard/>
//     </div>
//   )
// }

// export default App

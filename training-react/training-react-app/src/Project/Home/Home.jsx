// import React from 'react'
// import Navbar from './Navbar'
// import"./Home.css";
// const Home = () => {
//   return (
//      <>
//       <Navbar />

//       <section className="hero">
//        <h6>AVAILABLE FOR WORK</h6>
//        <h1>HI.I'M <span>ELiott</span></h1>   
//        <p>Freelance<b>UI/UX Designer & FrontendDeveloper</b>.I design and build digital products that people love to use — fast, clean, and accessible.</p>
//         <div className="hero-btn">
//             <button className="btn1">View my work</button>
//             <button className="btn2">Get in touch</button>
//           </div>
      
//       </section>
//       </>
      

//   )
// }

// export default Home

import React from "react";
import "./HOME.css";
// import me from "../assets/me.jpg";
// import Navbar from "./Navbar";
import About from "../About/About";
function Home() {
  return (
    <div className="home-container">
  <div className="home-left">
    <span className="tag">AVAILABLE FOR WORK</span>
    <h1>
      Hi, I'm <span>eliott</span>
    </h1>
    <p>
     Freelance UI/UX Designer & Frontend Developer.
      I design and build digital products that 
      people love to use — fast, clean, and accessible.
    </p>
    <div className="buttons">
      <button className="primary-btn">View My Work</button>
      <button className="secondary-btn">Contact Me</button>
    </div>
    <div className="stats">
      <div className="score">
        <h2>34+</h2>
        <p>Projects Done</p>
      </div>
      <div className="score">
        <h2>5+</h2>
        <p>Experience</p>
      </div>

      <div className="score">
        <h2>10+</h2>
        <p>Happy Clients</p>
      </div>

    </div>
  </div>

  <div className="home-right">
    <img src="../public/Avatar.jpg" alt="" className="profile-image"/>
    <div className="work-tag">
      Open to Work
    </div>
  </div>
</div>
  );
}

export default Home;
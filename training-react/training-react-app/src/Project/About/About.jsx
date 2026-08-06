// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <h5>About me</h5>
//       <h1>A bit about who I am</h1>
//       <p>I'm Eliott, a freelance designer and frontend developer based in Paris with 5 years of experience shipping digital products for startups, agencies, and scale-ups across Europe. I thrive at the intersection of great design and clean code.
// I believe great interfaces are invisible — they get out of the user's way. My work is fast, accessible and built to last. When I'm not coding, you'll find me hiking or hunting for a good espresso.</p>
// <p>Stack & tools</p>
// <div className='heroine-btn'>
//   <button className='btn1'>Talwind css</button>
//   <button className='btn2'>Alpine.js</button>
//   <button className='btn3'>Figma</button>
//   <button classNmae='btn4'>HTML/CSS</button>
//   <button className='btn5'>Javascript</button>
//   <button className='btn6'>Symfony</button>
//   <button className='btn7'>Framer</button>
//   <button className='btn8'>webflow</button><br></br>

// </div>
//     </div>
//   )
// }

// export default About


import React from "react";
import "./About.css";
// import me from "../assets/me.jpg";
function About() {
  return (
    <div className="about-section">
      <div className="content-right">
        <p>About Me</p>
        <h1>Hi, I'm Eliott</h1>
        <p>
         I'm Eliott, a freelance designer and frontend developer based in Paris with 5 years of experience shipping digital products for startups, agencies, and scale-ups across Europe. I thrive at the intersection of great design and clean code.

I believe great interfaces are invisible — they get out of the user's way. My work is fast, accessible and built to last. When I'm not coding, you'll find me hiking or hunting for a good espresso
        </p><br></br>
        
      </div>
      <div className="content-left">
        <img src="../public/Avatar.jpg" alt="" className="profile-image"/>
      </div>
    </div>
  );
}

export default About;
import React from 'react'

const About = (props) => {
  console.log(props);
  return (
    <div className='myClass'>
      <h1>About</h1>
      {props.children[0]}
    </div>
  )
}

export default About

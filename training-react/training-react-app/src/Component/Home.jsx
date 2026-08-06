import React from 'react'
import { useState } from 'react'
import Navbar2 from './Navbar2'
import Carousel from './Carousel'
import Card from './Card'
import Footer from './Footer'


function Home() {
  return (
   <>
  <Navbar2 />
   <Carousel/> 
   <Card />
   <Footer />
   </>
  )
}

export default Home;

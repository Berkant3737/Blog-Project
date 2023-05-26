import React from 'react';
import Navbar from "../../Components/Navbar/Navbar"
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
import React from 'react';
import Navbar from "../../Components/Navbar/Navbar"
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Project from '../../Components/Project/Project';
import ContactMe from '../../Components/ContactMe/ContactMe';
import Footer from '../../Components/Footer/Footer';
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react';
import Navbar from "../../Components/Navbar/Navbar"
import Banner from '../../Components/Banner/Banner';
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
        <div className="container">
            <div className="row text-center">
                <h1>Home</h1>
            </div>
        </div>
    </div>
  )
}

export default Home
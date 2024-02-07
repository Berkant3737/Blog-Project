import React from 'react';
import Container from '../../Components/container/container';
import {ThemeProvider} from '../../Context/ThemeContext';
import Test from '../Test';
function Home() {
  return (
    <div>
      <ThemeProvider>
        <Container/>
      </ThemeProvider>
      
    </div>
    
  )
}

export default Home
import React from 'react';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

function Project() {
  return (
    <div>
      <Navbar/>
      <Hero2 
      heading="PROJECTS"
      text="These are some of my recent works."/>
      <Work/>
      
      <Footer/>
    </div>
  )
}

export default Project

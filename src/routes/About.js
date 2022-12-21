import React from 'react';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

function About() {
  return (
    <div>
      <Navbar/>
      <Hero2 
      heading="ABOUT"
      text="I am a Jr Frontend Developer."/>
      <AboutContent/>
      <ProfileCard/>
      <Footer/>
    </div>
  )
}

export default About

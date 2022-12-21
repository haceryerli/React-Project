import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Form from '../components/Form';

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero2 
      heading="CONTACT"
      text="To get in touch, leave a message in the form below."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact

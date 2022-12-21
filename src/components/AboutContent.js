import "./AboutContent.css";
import React from 'react';
import { Link } from "react-router-dom";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";


function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a Frontend Developer. I design and create responsive websites and developing myself in this field. I graduated from Dokuz Eylül University, Department of Mathematics in 2021. I want to improve myself in software and Frontend Development with the skills I have developed and gained throughout my academic life. In business life, with my idealistic, curious, patient and problem-solving personality that I trust; I aim to learn, develop and be successful.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About1} alt="img" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={About2} alt="img" className="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent

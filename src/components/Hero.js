import React from 'react';
import './Hero.css';
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
        <div className="mask">
        <img src={IntroImg} className='intro-img' alt="" />
        </div>
        <div className="content">
            <p>HI, WELCOME! I'M A</p>
            <h1>Frontend Developer</h1>
            <div className='content-btn'>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default Hero

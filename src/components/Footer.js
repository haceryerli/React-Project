import React from 'react';
import "./Footer.css";
import {FaHome, FaMailBulk, FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <Fade left>
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Çanakkale,</p>
                    <p>Turkey</p>
                </div>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                haceryerli17@gmail.com
                </h4>
            </div>
            <div className="social">
                <FaLinkedin size={30} className='social-icon' style={{color: "#fff", marginRight: "1rem"}}/>
                <FaGithub className='social-icon' size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaWhatsapp className='social-icon' size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                
            </div>
        </div>
        </Fade>

        <Fade right>
        <div className="right">
            <h4>About Me</h4>
            <p>This is me Hacer Yerli. I am a Jr. Frontend Developer and developing myself on HTML, CSS, JS, and especially ReactJs. I enjoy practicing new projects and also design websites.</p>
            
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Footer

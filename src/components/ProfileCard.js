import React from 'react';
import { Link } from 'react-router-dom';
import "./ProfileCard.css";
import Profile1 from "../assets/Linkedin.jpeg";
import Profile2 from "../assets/Kariyer.jpg";
import Profile3 from "../assets/github.png";
import Zoom from 'react-reveal/Zoom';;


function ProfileCard() {
  return (
    <div className='pricing'>
      <div className="card-container">

        <Zoom>
        <div className="card">
            <h3>- LinkedIn Profile -</h3>
            <span className='bar'></span>
            <img src={Profile1} alt="profile" />
            <p>- Get connect with me on LinkedIn! -</p>
            <a href="https://www.linkedin.com/in/hacer-yerli-b85370236/" className='btn' target="_blank">
                VISIT PROFILE
            </a>
        </div>
        
        <div className="card">
            <h3>- Kariyer.net Profile -</h3>
            <span className='bar'></span>
            <img src={Profile2} alt="profile" />
            <p>- Get connect with me on Kariyer! -</p>
            <Link to="/contact" className='btn'>
                VISIT PROFILE
            </Link>
        </div>

        <div className="card">
            <h3>- Github Profile -</h3>
            <span className='bar'></span>
            <img src={Profile3} alt="profile" />
            <p>- Get connect with me on Github! -</p>
            <a href="https://github.com/haceryerli" className='btn' target="_blank">
                VISIT PROFILE
            </a>
        </div>
        </Zoom>

      </div>
    </div>
  )
}

export default ProfileCard

import React from 'react';
import "./WorkCard.css";
import { Link } from 'react-router-dom';

function WorkCard(props) {
  return (
    <div className="project-card">
            <div className="img">
            <img src={props.imgsrc} alt="image" />
            </div>
            <h2 className='project-title'>{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                  
                    <a href={props.view} target="_blank" className="btn">View</a>
                </div>
            </div>
        </div>
  )
}

export default WorkCard

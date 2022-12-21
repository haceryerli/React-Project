import React from 'react';
import "./WorkCard.css";
import WorkCard from './WorkCard';
import WorkCarData from './WorkCardData';
import Slide from 'react-reveal/Slide';

function Work() {
  return (
    <div className='work-container'>
      <div className="heading">
      <h1 className='project-heading'>
        Website Projects
      </h1>
      <span className='line'></span>
      </div>
      <Slide left>
      <div className="project-container">
        {WorkCarData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>
      </Slide>
    </div>
  )
}

export default Work

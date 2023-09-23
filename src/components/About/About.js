import React from 'react';
import lohani from './lohani.gif';
import './About.css';

function About() {
  return (
    <section className='about--section'>
        <div className='summary' style={{ fontWeight:"bolder"}}>
            <div className='name' style={{ fontSize:"2rem",color: "purple" }}>Abhishek Lohani</div>
            <div className='about--summary'>
                <span style={{ color: "purple" ,fontWeight:"bolder" }}>Front End Developer </span>with 2+ years of experience in 
                crafting responsive web applications using HTML5, CSS3, and JavaScript (React, Angular). 
                Proficient in UI/UX design, ensuring cross-browser compatibility, and Git version control.
            </div>
        </div>
        <div className='image'>
            <img src={lohani} alt="gif_lohani"/>
        </div>
    </section>

  )
}

export default About
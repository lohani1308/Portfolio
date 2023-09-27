import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className='experience'>
        <div className='line'></div>
        <div className='experience--heading'  style={{ fontSize:"2rem",color: "purple" }}>Work Experience</div>
        <div className='experience--section'>
            <ul>
            <li>
                Front-end/UI Developer at AOS(Apple.com),engaged in the design and implementation of
                captivating web pages using HTML5,CSS3,ES6 JavaScript,and ReactJS.
            </li>
            <br/>
            <li>
                Successfully transformed and migrated an outdated website into a high-performance
                Progressive Web App(PWA)using ReactJS and Redux achieving a 50% increase in loading
            speed.
            </li>
            <br/>
            <li>
                Attained a significant 40% reduction in loading time and an impressiv 20% increase in user
                retention time.
            </li>
            <br/>
            <li>
                Improved accessibility features on more than 7 pages,improving user interactivity and enhancing
                the overall experience for disabled users.
            </li>
            <br/>
            <li>
                Effectively resolved and addressed more than 350+ bugs,resulting in significant improvements
                to the user experience.
            </li>
            <br/>
            </ul>
        </div>
    </div>
  )
}

export default Experience
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {

    const [active,setActive]=useState(false);
    
    const onButtonClick = () => {
        
    }

    return (
    <>
    <nav className={`${active ? 'active':''}`}>
        <ul className='list--container'>
            <li>About</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Projects</li>
        </ul>
          
        <button className='btn--resume' onClick={ onButtonClick }>Download Resume</button>  
    </nav>

    <div className={`hamburger ${active ? 'active' : ''}`} onClick={ ()=> setActive(!active)}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div> 
</>
  )
}

export default Navbar;
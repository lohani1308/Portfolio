import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <div className='line'></div>
        <div className='project--1'>
            <div style={{ fontSize:"2rem",color: "purple",marginBottom:'2%'}}>CryptoCurrencyApp</div>
            <div>
                Developed a comprehensive crypto-searching website using HTML5, CSS, JavaScript, and
                ReactJS.
                The website enables users to search for detailed information and performance data on
                cryptocurrencies through interactive graphs and tables. Codebase available on GitHub:
                <a href='https://github.com/lohani1308/CryptoFinder'> https://github.com/lohani1308/CryptoFinder </a>

            </div>
        </div>

        <br/>

        <div className='project--2'>
          <div style={{ fontSize:"2rem",color: "purple",marginBottom:'2%'}}>Food Delivery Website</div>
          <div>
              Accelerated and Initiated a Food Delivery App using ReactJS, JavaScript, HTML, and CSS.
              Leveraged Firebase API for seamless retrieval and processing of food ordering data.
        
              Establishedexpertise in building responsive and interactive user interfaces. The codebaseis
              available on GitHub:
              <a href='https://github.com/lohani1308/CryptoFinder'> https://github.com/lohani1308/FoodOrder </a>
          </div>
        </div>
    </div>
  )
}

export default Projects
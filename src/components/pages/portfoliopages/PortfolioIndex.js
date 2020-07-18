import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../../../scss/portfolio/main.scss'


 const PortfolioIndex = () => {
 useEffect(()=>{
  // Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

});
 

  return (
   
      <div id="workdiv">
     
      <header>
    <div className="menu-btn">
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>

    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
      <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
         
        </li>
        <li className="nav-item current">
        <Link to='/PortfolioAbout' className="nav-link">About Me</Link>
         
        </li>
        <li className="nav-item">
        <Link to='/PortfolioWork' className="nav-link">My Work</Link>
          
        </li>
        <li className="nav-item">
        <Link to='/PortfolioContact' className="nav-link">How To Reach Me</Link>
          
        </li>
      </ul>
    </nav>
  </header>

  <main id="home">
    
      <h1 className="lg-heading">
      Chase <span className="text-secondary">Aufmann</span>
      </h1>
    
    
  
    <h2 className="sm-heading">
      Web Developer, Programmer, Smasher of Keyboards
    </h2>
    
    <div className="icons">
      
      <a href="#!">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>
  
    </div>
  )
}
export default PortfolioIndex
import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';


 const PortfolioContact = () => {
  
  
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
    <Fragment>
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

      <main id="contact">
        
    <h1 className="lg-heading">
      Contact
      <span className="text-secondary"> Me</span>
    </h1>
   
    <h2 className="sm-heading">
      This is how you can reach me...
    </h2>
    <div className="boxes">
      <div>
        <span className="text-secondary">Email: </span> caufmanndev@gmail.com      
      </div>
      <div>
         
      <a href="https://github.com/chaseaufmann" target="_blank" rel="noopener noreferrer">
        <span className="text-secondary">Guthub Link: </span> Behold my code vault!
      </a>
      </div>
      
        <div>
         
      <a href="https://www.linkedin.com/in/chase-aufmann-43848673/" target="_blank" rel="noopener noreferrer">
        <span className="text-secondary">Linkedin Link: </span> Give it a press!
      </a>
      </div>
    </div>
   
  </main>

  <footer id="main-footer">
    Copyright &copy; 2020
  </footer>
    </Fragment>
  )
}

export default PortfolioContact
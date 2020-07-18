import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';



 const PortfolioWork = () => {
 
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item current">
              <Link to="/PortfolioAbout" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PortfolioWork" className="nav-link">
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PortfolioContact" className="nav-link">
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <a href="https://chaseaufmann.github.io/Github-Finder/" target="_blank" rel="noopener noreferrer">
              <img src={require('../../../img/portfolio/GithubFinder.jpg')} alt="Project" />
            </a>
            <div className="btn-light">
              <i className="fas fa-eye"></i> Github-Finder
            </div>
            <div className="btn-light">
              <i className="fas fa-eye"></i> <p>
              Using the Github API, I created a React web app that allows one to search for a specific user or users and display some profile information. 
              
             </p>
             <p>Everything in this project was custom javascript and css: flexbox and grid.</p>
            </div>
            
            <div className="btn-dark">
              <i className="fab fa-github"></i> Github
            </div>
          </div>
         
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
      
    </Fragment>
  );
};

export default PortfolioWork;

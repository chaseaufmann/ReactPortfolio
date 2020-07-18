import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';



 const PortfolioAbout = () => {
  
  
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
    <div >
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

  <main id="about">
    <h1 className="lg-heading">
      About
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      Let me tell you a few things...
    </h2>
    <div className="about-info">
      <img src={require("../../../img/portfolio/caportrait150.jpg")} alt="Chase AUfmann" className="bio-image"/>

      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p> My name's Chase Aufmann and I'm a Full Stack Web Developer</p>
      </div>

      <div className="job job-1">
        <h3>Bluelake Software</h3>
        <h6>C# Asp.Net Developer</h6>
        <p>Created custom CRUD web apps in ASP.net
        </p>
        <p>Front-End: HTML, CSS, SCSS, Javascript,Jquery, Datatables</p>
        <p>Back-End: ASP.Net, C#, MVC, SQL Server</p>
      </div>

      <div className="job job-2">
        <h3>Currently Learning</h3>
        <h6>React-Front End Developer</h6>
        <p>Using the React Web Framework along with Javascript; I built this entire app plus all included projects. Please see to projects for code smashing skills!</p>
      </div>

      
    </div>
  </main>

  <footer id="main-footer">
    Copyright &copy; 2020
  </footer>
 
    </div>
  )
}
export default PortfolioAbout
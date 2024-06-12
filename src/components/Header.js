import React from 'react';
import './Header.css'; // Import the CSS file for styling
import logo from './logo.jpg'; // Ensure the logo image is available in the same folder
import bgVideo from './video/background_video.mp4';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
     
      <nav className="navigation">
      
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about-us">ABOUT US</a></li>
          <li><a href="#services">OUR SERVICES</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#blogs">OUR BLOGS</a></li>
          <li><a href="#contact-us">CONTACT US</a></li>
        </ul>
      
     
      </nav>
      <div className="icons">
      <i class="fi fi-rs-search"></i>
      <i class="fi fi-rr-settings-sliders"></i>
      </div>
      
    </header>
  );
};

export default Header;

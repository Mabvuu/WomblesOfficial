import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import SidebarComponent from './SidebarComponent'; // Assuming you have this for smaller screens

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define dropdown state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="address">
          <p><i className="fa-solid fa-location-dot"></i> 158 Enterprise road, Highlands, {' '} Harare, Zimbabwe</p>
        </div>
        <div className="number">
          <p><i className="fa-solid fa-phone"></i> (024) 2497768</p>
          <p><i className="fa-solid fa-phone"></i> 0772 336 224</p>
        </div>
        <div className="email">
          <p><i className="fa-regular fa-envelope"></i> bookings@khayanyama.com</p>
        </div>
      </header>
      <div className="logo">
        <Link to="/"><img src="img1/logo.jpg" alt="" /></Link>
      </div>
      <nav className='navbar'>
        <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">Home</Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">About</Link>
        <Link to="menu" spy={true} smooth={true} duration={500} className="cursor-pointer">Menu</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer">Contact</Link>


      </nav>

    </>
  );
};

export default Navbar;

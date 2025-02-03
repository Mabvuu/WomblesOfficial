import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai'; // Arrow icon

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="bg-[#526534] text-white h-[8vh] w-full pb-7 flex justify-between items-center overflow-hidden pt-6">
        <div className="address">
          <p><i className="fa-solid fa-location-dot"></i> 158 Enterprise road, Highlands, {' '} Harare</p>
        </div>
        <div className="number">
          <p><a href="tel:0242497768"><i className="fas fa-phone"></i> (024) 2497768</a></p>
          <p><a href="tel:+263772336224"><i className="fas fa-phone"></i> +263 772 336 224</a></p>
        </div>

        <div className="email">
          <p><a href="mailto:bookings@khayanyama.com" className="hover:underline">
            <i className="fas fa-envelope"></i> bookings@khayanyama.com
          </a></p>
        </div>
      </header>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[27%]">
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Image" />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar flex justify-center items-center bg-[#526534] p-4">
        <div className={`flex justify-center items-center space-x-4 ${!menu ? "hidden md:flex" : ""}`}>
          <RouterLink to="/" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">Home</RouterLink>
          <RouterLink to="/About" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">About</RouterLink>

          {/* Dropdown Menu with Arrow */}
          <div className="relative group">
            <div onClick={toggleDropdown} className="flex items-center text-white text-xl hover:underline cursor-pointer">
              Menu
              <AiOutlineDown className={`ml-2 transform ${dropdownOpen ? "rotate-180" : ""} transition-all`} />
            </div>
            {dropdownOpen && (
              <ul className="absolute bg-white border border-gray-400 rounded-lg p-4 z-10 w-52 mt-2">
                <li><RouterLink to="/Mains" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Mains</RouterLink></li>
                <li><RouterLink to="/Salads" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Salads</RouterLink></li>
                <li><RouterLink to="/Starters" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Starters</RouterLink></li>
                <li><RouterLink to="/Desserts" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Desserts</RouterLink></li>
                <li><RouterLink to="/Cocktails" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Cocktails</RouterLink></li>
                <li><RouterLink to="/Wine" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Wine</RouterLink></li>
                <li><RouterLink to="/Barmenu" spy={true} smooth={true} duration={500} className="text-black text-xl hover:underline cursor-pointer">Bar Menu</RouterLink></li>
              </ul>
            )}
          </div>

          <RouterLink to="/contact" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">Contact</RouterLink>
        </div>

        <div className="md:hidden flex items-center justify-between space-x-4">
          <a href="https://www.facebook.com/wombleszimbabwe/" className="text-white text-2xl pt-2 hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/wombles_zimbabwe/" className="text-white text-2xl pt-2 hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <div className="flex items-center flex-grow">
            {menu ?
              (<AiOutlineClose size={25} onClick={handleChange} className="text-white z-20 absolute top-13 right-0 mr-4 mt-4 border border-white rounded-full p-1" />) :
              (<AiOutlineMenuUnfold size={25} onClick={handleChange} className="text-white" />)
            }
          </div>
        </div>
      </nav>

      <div className={`menu ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute text-white left-0 top-[4.4rem] font-semibold text-xl text-center pt-8 w-full h-fit transition-transform duration-300 border-t border-white z-10`}>
        <RouterLink to="/" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer font-light mb-6">HOME</RouterLink>
        <RouterLink to="/About" spy={true} smooth={true} duration={500} className="text-white hover:underline cursor-pointer font-light mb-6">ABOUT</RouterLink>

        <div className="relative group">
          <div onClick={toggleDropdown} className=" text-white text-2xl font-light hover:underline cursor-pointer mb-8">
            Menu
            
          </div>
          {dropdownOpen && (
            <ul className="absolute bg-white border border-gray-400 rounded-lg p-4 z-20 w-full">
              <li><RouterLink to="/Mains" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Mains</RouterLink></li>
              <li><RouterLink to="/Salads" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Salads</RouterLink></li>
              <li><RouterLink to="/Starters" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Starters</RouterLink></li>
              <li><RouterLink to="/Desserts" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Desserts</RouterLink></li>
              <li><RouterLink to="/Wine" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Wine</RouterLink></li>
              <li><RouterLink to="/Cocktails" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Cocktails</RouterLink></li>
              <li><RouterLink to="/Barmenu" spy={true} smooth={true} duration={500} className="text-black text-2xl font-light hover:underline cursor-pointer">Bar Menu</RouterLink></li>
            </ul>
          )}
        </div>
        <RouterLink to="contact" spy={true} smooth={true} duration={500} className="text-white hover:underline font-light cursor-pointer mb-6">CONTACT</RouterLink>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-[37%]">
          <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

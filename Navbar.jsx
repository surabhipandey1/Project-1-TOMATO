import React, { useState, useContext } from 'react';
import '../Navbar/Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [Menu, setMenu] = useState('Home');
  const { getTotalCartAmount } = useContext(StoreContext); // Correct context usage

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={() => setMenu('Home')} className={Menu === 'Home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu('Menu')} className={Menu === 'Menu' ? 'active' : ''}>
            Menu
          </a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu('Mobile-app')} className={Menu === 'Mobile-app' ? 'active' : ''}>
            Mobile-app
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu('Contact Us')} className={Menu === 'Contact Us' ? 'active' : ''}>
            Contact Us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/Cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

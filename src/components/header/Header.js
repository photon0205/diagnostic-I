import React from 'react';
import logo from '../../assets/header.png'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo} alt="Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;

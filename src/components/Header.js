// src/components/Header/Header.js
import React from 'react';
import '../styles/Header.scss'; // Import the SCSS file for styling

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

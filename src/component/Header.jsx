// src/component/Header.jsx
import React from 'react';
import './Header.css'; // Créez ce fichier CSS pour les styles du Header

const Header = () => {
  return (
    <header>
      {/* Bandeau de promotion en haut */}
      <div className="promo-bar">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
        <a href="#shop" className="shop-now">ShopNow</a>
        {/* L'icône de langue peut être ajoutée ici */}
      </div>

      {/* Barre de navigation principale */}
      <nav className="main-nav">
        <div className="logo">
          <h1>Exclusive</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-icon">🔍</button>
        </div>
      </nav>

      {/* La ligne violette de séparation */}
      <div className="separator-line"></div>
    </header>
  );
};

export default Header;
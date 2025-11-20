// src/component/Footer.jsx
import React from 'react';
// Les styles sont dans src/index.css

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* 1. Exclusive Section */}
        <div className="footer-section exclusive">
          <h3>Exclusive</h3>
          <ul>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
          <div className="subscribe-input-group">
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

        {/* 2. Support Section */}
        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li>el ghazela ,2083 Ariana</li>
            <li>exclusivechezsakn@gmail.com</li>
            <li>+88015-8888-9999</li>
          </ul>
        </div>

        {/* 3. Account Section */}
        <div className="footer-section account">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* 4. Quick Link Section */}
        <div className="footer-section quick-link">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* 5. Download App Section */}
        <div className="footer-section download-app">
          <h3>Download App</h3>
          <ul>
            <li className="save-money-text">Save $3 with App New User Only</li>
          </ul>
          <div className="app-download-logos">
            {/* Vous devez insérer ici le QR code et les images de l'App Store/Google Play */}
            <p>[Image QR Code]</p>
            <p>[Logos App Store / Play Store]</p>
          </div>
          <div className="social-links">
            {/* Placeholders pour les icônes sociales */}
            <a href="#fb">📘</a>
            <a href="#twitter">🐦</a>
            <a href="#insta">📸</a>
            <a href="#linkedin">🔗</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
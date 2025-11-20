// src/component/AuthSection.jsx
import React from 'react';
import './AuthSection.css'; // Créez ce fichier CSS

const AuthSection = () => {
  return (
    <div className="auth-section-container">
      {/* 1. Espace Image Vide */}
      <div className="image-placeholder">
        src="C:\Users\SOUHA\Desktop\projet skan"
    
      </div>

      {/* 2. Formulaire de création de compte */}
      <div className="auth-form-side">
        <h2>Create an account</h2>
        <p className="enter-details">Enter your details below</p>

        <form className="auth-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>

        <button className="google-sign-in-btn">
          <img src="" alt="" className="google-icon" /> {/* Placeholder pour l'icône Google */}
          Sign up with Google
        </button>

        <p className="login-prompt">
          Already have account? <a href="#login" className="login-link">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default AuthSection;
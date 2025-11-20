// src/App.jsx
import React from 'react';
import Header from './component/Header';
import AuthSection from './component/AuthSection';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AuthSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import "./Header.css"

function Header() {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="header__logo">
        <h1>Exclusive</h1>
      </div>

      {/* Navigation links in the center */}
      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#signup">Sign Up</a>
      </nav>

      {/* Search and icons on the right */}
      <div className="header__actions">
        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="search-icon">
            {/* SVG Icon: Magnifying glass for search */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* Action icons */}
        <button className="icon-btn">
          {/* SVG Icon: Heart for wishlist */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button className="icon-btn">
          {/* SVG Icon: Shopping cart */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
        <button className="icon-btn account-btn">
          {/* SVG Icon: User account */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;

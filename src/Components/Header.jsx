import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <strong>Exclusive</strong>
      </div>
      <nav className="navbar">
        <span>Home</span>
        <span>Contact</span>
        <span>About</span> 
        <span className="signup">Sign Up</span>
        <input className="Search bar" type="text" placeHolder="What are you looking for"></input>
        <button className="Search" style={{ marginLeft: "-80px" }}>🔍︎</button>
        <button className="Favourites" style={{ marginLeft: "-40px" }}>♡</button>
        <button className="Favourites" style={{ marginLeft: "-40px" }}>🛒</button>
        <button className="MyAccount" style={{ marginLeft: "-40px" }}>👤</button>
      </nav>
    </div>
  );
}

export default Header;

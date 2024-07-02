import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
      <div className="title-container">
        <p>Palette Mada</p>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
import React from 'react';


interface NavbarProps {
  scrollTo: (id: string) => void
}


function Navbar({scrollTo}: NavbarProps) {
  return (
    <div className="navbar">
      <div className="navbar-container">
      <div className="title-container">
        <p>Palette Mada</p>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <button className='menu-item' onClick={() => scrollTo("home")}>Accueil</button>
          <button className='menu-item' onClick={() => scrollTo("about")}>À Propos</button>
          <button className='menu-item' onClick={() => scrollTo("product")}>Produits</button>
          <button className='menu-item' onClick={() => scrollTo("contact")}>Contacts</button>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
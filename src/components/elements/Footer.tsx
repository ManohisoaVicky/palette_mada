import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Material Design icons

interface FooterProps {
  scrollTo: (id: string) => void;
}

function Footer({ scrollTo }: FooterProps) {
  return (
    <div className="footer">
      <div className="footer-main">
        <div>
          <h3>Palette Mada</h3>
          <button className="footer-btn" onClick={() => scrollTo("home")}>
            Accueil
          </button>
          <button className="footer-btn" onClick={() => scrollTo("about")}>
            À Propos
          </button>
          <button className="footer-btn" onClick={() => scrollTo("product")}>
            Nos Produits
          </button>
        </div>
        <div>
          <h3>Contacts</h3>
          <div>
            <MdEmail />
            <p>palettemada@gmail.com</p>
          </div>
          <div>
            <MdPhone />
            <p>(+261) 34 02 670 24</p>
          </div>
          <div>
            <MdPhone />
            <p>(+261) 33 02 670 24</p>
          </div>
        </div>
      </div>
      <p>Droits d'auteur © [2024] Palette Mada. Tous droits réservés.</p>
    </div>
  );
}

export default Footer;

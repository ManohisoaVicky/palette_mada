import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Material Design icons

interface FooterProps {
  scrollTo: (id: string) => void;
}

function Footer({ scrollTo }: FooterProps) {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-link-container">
          <h3>Palette Mada</h3>
          <p className="footer-link" onClick={() => scrollTo("home")}>
            Accueil
          </p>
          <p className="footer-link" onClick={() => scrollTo("about")}>
            À Propos
          </p>
          <p className="footer-link" onClick={() => scrollTo("product")}>
            Nos Produits
          </p>
        </div>
        <div>
          <h3>Contacts</h3>
          <div className="footer-info-container">
            <MdEmail />
            <p className="footer-info">palettemada@gmail.com</p>
          </div>
          <div className="footer-info-container">
            <MdPhone />
            <p className="footer-info">+261 34 02 670 24</p>
          </div>
          <div className="footer-info-container">
            <MdPhone />
            <p className="footer-info">+261 33 02 670 24</p>
          </div>
        </div>
      </div>
      <p className="copyright">
        Droits d'auteur © [2024] Palette Mada. Tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;

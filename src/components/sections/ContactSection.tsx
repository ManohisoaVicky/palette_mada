import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Material Design icons

function ContactSection() {
  return (
    <div className="section" id="contact">
      <div className="contact-content">
        <h2>Contacts</h2>
        <p>
          Chez Palette Mada, nous sommes toujours à votre écoute. Que vous ayez
          des questions sur nos produits, besoin d'un devis, ou souhaitiez
          simplement en savoir plus sur nos services, n'hésitez pas à nous
          contacter. Notre équipe dédiée est là pour vous assister et répondre à
          toutes vos préoccupations. Remplissez le formulaire ci-dessous ou
          appelez-nous directement. Nous nous réjouissons de vous aider !
        </p>
        <div className="contact-info">
          <div>
            <MdEmail />
            <p>palettemada@gmail.com</p>
          </div>
          <div>
            <MdPhone />
            <p>034 02 670 24 | 033 02 670 24</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="input-box">
            <label>Nom</label>
            <input
              type="text"
              className="field"
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              className="field"
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              className="field mess"
              placeholder="Entrez votre message"
            ></textarea>
          </div>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;

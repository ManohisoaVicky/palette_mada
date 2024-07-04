import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Material Design icons
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataToSubmit = new FormData();
    dataToSubmit.append("access_key", "1bfb7190-a28a-4f45-b562-c306e2c14678");
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("email", formData.email);
    dataToSubmit.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Envoi confirmé!",
          text: "Votre message a été envoyé avec succès.",
          icon: "success",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error", data);
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };

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
            <p>+261 34 02 670 24</p>
          </div>
          <div>
            <MdPhone />
            <p>+261 33 02 670 24</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Nom</label>
            <input
              type="text"
              className="field"
              placeholder="Entrez votre nom"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              className="field"
              placeholder="Entrez votre email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              className="mess"
              placeholder="Entrez votre message"
              name="message"
              value={formData.message}
              onChange={onChange}
            ></textarea>
          </div>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;

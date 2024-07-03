import React from 'react'
import handshake from "../../images/handshake.jpg"
import teamwork from "../../images/teamwork.jpg"

function AboutSection() {
  return (
    <div className='section' id='about'>

      <div className="intro">
        <h2>Qui Sommes-Nous?</h2>
        <p>Palette Mada se spécialise dans la fourniture de palettes en bois et en plastique de haute qualité, 
            adaptées pour répondre aux besoins diversifiés de nos clients. Que vous recherchiez des palettes 
            en bois durables pour une utilisation intensive ou des palettes en plastique légères pour un transport efficace, 
            nous avons ce qu'il vous faut.</p>
      </div>

      <div className="history">
        <div className="history-content">
          <h3>Notre Histoire</h3>
          <p>Fondée en 2011, Palette Mada a débuté avec la vision de proposer des 
              solutions de palettes fiables et durables. Au fil des années, nous sommes 
              passés d'une petite startup à un fournisseur leader dans l'industrie,reconnu 
              pour notre engagement envers la qualité et la satisfaction de nos clients.</p>
        </div>
        <div className="about-img">
          <img src={teamwork} alt="Teamwork" />
        </div>
      </div>

      <div className="values">
        <div className="values-content">
          <h3>Notre Mission et Nos Valeurs</h3>
          <p>Notre mission est de fournir des solutions de palettes de premier ordre 
              qui aident les entreprises à optimiser leurs opérations logistiques et leur 
              chaîne d'approvisionnement. Nous croyons en la durabilité, l'intégrité et 
              l'innovation, en veillant à ce que nos produits non seulement répondent 
              mais surpassent les normes de l'industrie.</p>
        </div>
        <div className="about-img">
          <img src={handshake} alt="Handshake" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
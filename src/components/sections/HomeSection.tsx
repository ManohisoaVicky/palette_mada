import React from 'react'
import transparent from "../../images/transparent.png"

function HomeSection() {
  return (
    <div className='section' id='home'>
      <div className="home-content">
        <h1>
        Votre Partenaire de Palettes à Madagascar
        </h1>
        <p>
          Faites confiance à Palette Mada pour des palettes durables et diversifiées, parfaitement adaptées à vos exigences.
        </p>
      </div>
      <div className="home-img">
        <img src={transparent} alt="Palette Euro" />
      </div>
    </div>
  )
}

export default HomeSection
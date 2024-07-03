import React from 'react'
import bois from "../../images/pallete_bois.jpg"
import plastic from "../../images/pallete_plastic.jpg"

function ProductSection() {
  return (
    <div className='section' id='product'>
      <h2>Nos Produits</h2>

      <div className="product-container">

        <div className="wood-product">
          <h3>Palette en Bois</h3>
          <img src={bois} alt="Palette" />
        </div>

        <div className="plastic-product">
          <h3>Palette en Plastique</h3>
          <img src={plastic} alt="Palette" />
        </div>

      </div>
      
    </div>
  )
}

export default ProductSection
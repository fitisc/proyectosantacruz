import React from 'react'
import { Link } from 'react-router-dom'

const CardWidget = () => {
  return (
    <div>
      <Link to="/Carrito">
      <span className="material-icons">shopping_cart</span></Link>
      
    </div>
  )
}

export default CardWidget
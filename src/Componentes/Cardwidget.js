import React from 'react'
import { Link } from 'react-router-dom'

const CardWidget = () => {
  return (
    <div>
      <Link to="/Carrito"></Link>
      <span className="material-icons">shopping_cart</span>
    </div>
  )
}

export default CardWidget
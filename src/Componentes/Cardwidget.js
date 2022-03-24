import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./Context/CartContext"




const CardWidget = () => {

  const {calcularTotalUnidades} = useContext(contexto);
  

  return (
    <div>
      <Link to="/Carrito">
      <span className="material-icons">shopping_cart</span>
      {calcularTotalUnidades() === 0 ? null : calcularTotalUnidades()}
      </Link>
    </div>
  )
}

export default CardWidget
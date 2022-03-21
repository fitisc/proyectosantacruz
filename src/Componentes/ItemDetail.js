import React, { useState } from 'react'

import ItemCount from "./ItemCount"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  const [estado, setEstado] = useState(0)
  //let navigate = useNavigate();

  const onAdd = (estado) => {
    setEstado(estado);
      //setTimeout(() => {
      //navigate("/cart");
      //}, 3000);
    console.log("Añadir a carrito", estado)
  }

  return (
    <div>
        <article className='articles2'>
          <img src={item.imageUrl} />
          <h2>{item.title}</h2>
          <h3> Precio: ${item.price}</h3>
          <p>Descripción: "{item.description}"</p>
          <h5>Categoria: {item.category}</h5>
          <h5>Stock disponible: {item.stock}</h5>
          { estado === 0 ? 
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
            : 
            <button className='btn-comprar'>
            <Link to="/cart">Terminar compra</Link>
            </button>
          }
          
          
          
          
            
        </article>
    </div>
  )
}

export default ItemDetail
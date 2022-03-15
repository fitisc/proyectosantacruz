import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
  return (
    <div>
        <article className='articles'>
            <h2>{producto.title}</h2>
            <img src="" />
            <p>Descripción: "{producto.description}"</p>
            <h3> Precio: ${producto.price}</h3>
            <h5>Categoria: {producto.category}</h5>
            <h5>Stock disponible: {producto.stock}</h5>
            <ItemCount initial={1} stock={6} />
        </article>
    </div>
  )
}

export default ItemDetail
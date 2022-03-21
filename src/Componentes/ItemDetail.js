import React from 'react'

import ItemCount from "./ItemCount"
import Cart from './Cart'


const ItemDetail = ({item}) => {


  const onAdd = (cantidad) => {
    
    console.log("Añadir a carrito", cantidad)
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
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
          <Cart />
          
            
        </article>
    </div>
  )
}

export default ItemDetail
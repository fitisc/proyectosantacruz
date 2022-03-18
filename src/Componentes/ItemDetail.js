import React from 'react'
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
  return (
    <div>
        <article className='articles2'>
          <img src={item.imageUrl} />
          <h2>{item.title}</h2>
          <h3> Precio: ${item.price}</h3>
          <p>Descripción: "{item.description}"</p>
          <h5>Categoria: {item.category}</h5>
          <h5>Stock disponible: {item.stock}</h5>
          <ItemCount initial={1} stock={item.stock} />
            
        </article>
    </div>
  )
}

export default ItemDetail
import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemList({item}) {
    return (
         <article className='articles'>
            <h2>{item.title}</h2>
            <img src= {item.imageUrl} />
            <p>Descripción: "{item.description}"</p>
            <h3> Precio: ${item.price}</h3>
            <h5>Categoria: {item.category}</h5>
            <h5>Stock disponible: {item.stock}</h5>
            <Link to= {`/item/${item.id}`}>Ver detalle</Link>
        </article>
    )
}

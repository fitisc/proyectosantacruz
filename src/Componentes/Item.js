import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemList({item}) {
    return (
         <article className='articles'>
            <h2>{item.title}</h2>
            <img src= {item.imageUrl} />
            <h3> Precio: ${item.price}</h3>
            <Link to= {`/item/${item.id}`}>Ver detalle</Link>
        </article>
    )
}

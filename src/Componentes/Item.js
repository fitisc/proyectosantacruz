import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemList({item}) {
    return (
         <article className='articles'>
            <h2>{item.title}</h2>
            <img src= {item.imageUrl} alt="foto prenda"/>
            <h3> Precio: ${item.price}</h3>
            <button className='btn-detalle'>
            <Link to= {`/item/${item.id}`}>Ver detalle</Link></button>
        </article>
    )
}

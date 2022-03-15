import React from 'react'

export default function ItemList({item}) {
    return (
         <article className='articles'>
            <h2>{item.title}</h2>
            <img src="" />
            <p>Descripción: "{item.description}"</p>
            <h3> Precio: ${item.price}</h3>
            <h5>Categoria: {item.category}</h5>
            <h5>Stock disponible: {item.stock}</h5>
        </article>
    )
}

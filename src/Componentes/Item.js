import React from 'react'

export default function ItemList({item}) {
    return (
         <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            <h5>{item.category}</h5>
            <h5>{item.stock}</h5>
            <hr />
        </div>
    )
}

import React from 'react'
import Item from "./Item"

function ItemList({item}) {
    return (
        <section className='productos'>
             {item.map((item) => {
                return <Item key={item.id}
                        item={item} />
            })}
        </section>
    )
}



export default ItemList
import React from 'react'
import Item from "./Item"

function ItemList({item}) {
    return (
        <section>
             {item.map(item =>{
                return(
                    <div>
                        <Item key={item.id}
                        item={item}
                       
                        />
                    </div>
                )
            })}
          
        </section>
    )
}



export default ItemList
import React from 'react'
import ItemCount from "./ItemCount"
import { Link} from "react-router-dom"

const ItemDetail = ({producto}) => {
  return (
    <div>
        <article className='articles'>
        <img src={producto.imageUrl} />
            <h2>{producto.title}</h2>
            <p>Descripción: "{producto.description}"</p>
            <h3> Precio: ${producto.price}</h3>
            <h5>Categoria: {producto.category}</h5>
            <h5>Stock disponible: {producto.stock}</h5>
            <ItemCount initial={1} stock={6} />
            <Link to= {`/producto/${producto.id}`}>Ver detalle</Link>

        </article>
    </div>
  )
}

export default ItemDetail
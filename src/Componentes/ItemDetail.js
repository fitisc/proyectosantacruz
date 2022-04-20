import React, { useState, useContext } from 'react' 
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'
import { contexto } from "./Context/CartContext"

const ItemDetail = ({item}) => {
  const { addToCart } = useContext(contexto);

  const [cantidad, setCantidad] = useState(0)

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  
  }
  

  return (
    <div>
        <article className='articles2'>
          
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt="foto prenda"/>
          <hr></hr>
          <h3> Precio: ${item.price}</h3>
          <h5>Descripción: "{item.description}"</h5>
          <h5>Categoria: {item.category}</h5>
          <h5>Stock disponible: {item.stock}</h5>
          <hr></hr>
          { cantidad === 0 ? 
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
            : 
            <>
              <button className='btn-comprar'>
                <Link to="/carrito">Ir a Carrito</Link>
              </button><br/>
              <button className='btnSeguirCompra'>
                <Link to="/">Seguir Comprando</Link>
              </button>
            </>
          } 
           
            
        </article>
    </div>
  )
}

export default ItemDetail
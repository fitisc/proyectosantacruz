import React, { useState, useContext } from 'react' 
import ItemCount from "./ItemCount"
//import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { contexto } from "./Context/CartContext"

const ItemDetail = ({item}) => {
  const { addToCart } = useContext(contexto);

  const [cantidad, setCantidad] = useState(0)
  //let navigate = useNavigate();

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
    
    //vaciarCarrito()
      //setTimeout(() => {
      //navigate("/cart");
      //}, 3000);
    //console.log("Añadir a carrito", cantidad)

    
    //addToCart(item, cantidad);
  }
  

  return (
    <div>
        <article className='articles2'>
          <img src={item.imageUrl} />
          <h2>{item.title}</h2>
          <h3> Precio: ${item.price}</h3>
          <p>Descripción: "{item.description}"</p>
          <h5>Categoria: {item.category}</h5>
          <h5>Stock disponible: {item.stock}</h5>
          { cantidad === 0 ? 
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
            : 
            <button className='btn-comprar'>
            <Link to="/carrito">Ir a Carrito</Link>
            </button> 
          } 
          
          
          
          
            
        </article>
    </div>
  )
}

export default ItemDetail
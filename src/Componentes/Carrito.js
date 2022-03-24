
import {useContext} from "react"
import { Link } from "react-router-dom"
import {contexto} from "./Context/CartContext"
import ItemList from "./Item"

 
const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito, borrarProd} = useContext(contexto)
console.log(carrito)



  return (
    <>
      {carrito.length === 0 ? (
        <><h1 className="avisoCarrito">Aun no tenes productos</h1>
        <Link to="/" className="home1"> Ir a Home</Link></>
      ) : (
      <div>
        <h2>Carrito</h2>
        {carrito.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.cantidad} x $ {item.price}</p>
            <p>Subtotal: ${item.cantidad * item.price}</p>
            <button onClick={()=> borrarProd(item.id)}>Eliminar producto</button>
          </div>
        ))}
        <h3>Total Compra : ${calcularTotal()} </h3>
        <button className='btn-comprar' onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
      )
      }
    </>
  )
}

export default Carrito

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
        <><h1 className="avisoCarrito">¡Aun no tenes productos!</h1>
        <Link to="/" className="home1"> Ir a HOME</Link></>
      ) : (
      <>
        <h1 className="tituloCarrito">Carrito</h1>
        <div className="carrito">    
        {carrito.map(item => (
          <div key={item.id}>
            <h3 className="tituloProd">{item.title}</h3>
            <img src={item.imageUrl}/>
            <p>{item.cantidad} x $ {item.price}</p>
            <p>Subtotal: ${item.cantidad * item.price}</p>
            <button onClick={()=> borrarProd(item.id)}>Eliminar producto</button>
          </div>
        ))}
        </div>
        <h3>Total Compra : ${calcularTotal()} </h3>
        <button className='btnReset'>
          <Link to="/">Seguir Comprando</Link>
        </button>
        <button className='btnRestar'>
          <Link to="/">Terminar Compra</Link>
        </button>
        <button className='btn-comprar' onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </>
      
      )
      }
    </>
  )
}

export default Carrito
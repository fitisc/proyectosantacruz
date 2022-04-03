import { collection, serverTimestamp, addDoc } from "firebase/firestore/lite"
import {useContext} from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import {contexto} from "./Context/CartContext"
import ItemList from "./Item"
import { db, sendBuyOrder } from "../FireBase/Index"

 
const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito, borrarProd } = useContext(contexto)


const handleSubmit = () => {
  vaciarCarrito();

  const orderData = {
     buyer: {
      nombre: "Pedro",
      telefono: "3512569874",
      email: "pedro@gmail.com"
    },
    items: [...carrito],
    date: serverTimestamp(),
    total: calcularTotal()
  }
  sendBuyOrder(orderData)
  toast.success("¡Gracias por tu compra!")
}


  return (
    <>
      {carrito.length === 0 ? (
        <><h1 className="avisoCarrito">¡No tienes productos en el carrito!</h1>
        <Link to="/" className="home1"> Ir a Catalogo</Link></>
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
        <button className='btnRestar' onClick={handleSubmit} >Finalizar Compra</button>
        <button className='btn-comprar' onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </>
      
      )
      }
    </>
  )
}

export default Carrito
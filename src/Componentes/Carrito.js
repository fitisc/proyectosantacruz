import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import {contexto} from "./Context/CartContext"
import { sendBuyOrder } from "../FireBase/Index"

 
const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito, borrarProd } = useContext(contexto);
  
  const [orderId, setOrderId] = useState(false);

const handleSubmit = () => {
  vaciarCarrito();
  setOrderId(true);

  const orderData = {
     buyer: {
      nombre: "Pedro",
      telefono: "3512569874",
      email: "pedro@gmail.com"
    },
    items: [...carrito],
    
    total: calcularTotal(),
    
  }
  sendBuyOrder(orderData).then( res => setOrderId(res))
  toast.success("¡Gracias por tu compra! Su total es $ " + calcularTotal());
  
}



  return (
    <>
      {carrito.length === 0 ? (
        <>
          <>{orderId ? 
            <div>
              <h1 className="avisoCarrito">¡Muchas gracias por tu compra!</h1>
              <p>Tu ticket de compra es: <strong>{orderId}</strong></p>
              <p>Su total es:${calcularTotal()}</p>
             
              <Link to="/" className="home1 btn-success"> Ir a Catalogo</Link>
            </div>
          :
            <div>
              <h1 className="avisoCarrito">¡No hay productos en el carrito!</h1>
              <Link to="/" className="home1"> Ir a Catalogo</Link>
            </div>
            } 
          </>
        
        </> )
         : 
         (
      <>
        <h1 className="tituloCarrito">Carrito</h1>
        <div >    
        {carrito.map(item => (
          <div className="carrito" key={item.id}>
            <h3 className="tituloProd">{item.title}</h3>
            <img src={item.imageUrl} alt="foto prenda"/>
            <p>{item.cantidad} x $ {item.price}</p>
            <p>Subtotal: ${item.cantidad * item.price}</p>
            <button className="btn-detalle" onClick={()=> borrarProd(item.id)}>Eliminar producto</button>
          </div>
        ))}
        </div>
        <h3>Total Compra : ${calcularTotal()} </h3>
        <button className='btnSeguirCompra'>
          <Link to="/">Seguir Comprando</Link>
        </button>
        <br />
        <button className='btnFinalCompra' onClick={handleSubmit} >Finalizar Compra</button>
        <br />
        <button className='btnVaciarCarro' onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </>
      
      )
      }
    </>
  )
}

export default Carrito
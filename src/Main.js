import React from 'react'
import ItemCount from './Componentes/ItemCount'
import { useEffect, useState } from 'react'
 
let productosIniciales = [
  {
     id: 1,
     name: "remera",
     precio: 1500,
   },
   {
     id: 2,
     name: "short",
     precio: 1200,
   },
   {
     id: 3,
     name: "pantalon",
     precio: 2500,
   },
   
 ]

const Main = (props) => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
//este efecto se va a ejecutar solo en el primer render y nunca mas
  useEffect(() => {
    console.log("Ejecutando useEffect")
  //aca quiero pedir productos
    setTimeout(() => {
    setProductos(productos)
 },5000)
    
}, [])//array de dependencia
  
console.log(productosIniciales)

 

  return (
    <main>
      <button onClick={() => setLoading(!loading)}>toggle</button>
      <h3>PRODUCTOS DESTACADOS {props.nombre}</h3>
      <ul>
        {productosIniciales.map((productosIniciales)=>{
          return <li key={productosIniciales.id}>{productosIniciales.name}</li> 
        })}
      </ul>
      <ItemCount initial={1} stock={6} />
      <ItemCount initial={1} stock={5} />
      
    </main>
  )
}

export default Main
import React from 'react'
import {useState} from "react"

const ItemCount = (props) => {

  //const Contador = ({initial, stock}) => {
    let [cantidad, setCantidad] = useState(props.initial)
  

  
//const [estado, setEstado] = useState(inicial)

  const handelSumar = () => {
    if(cantidad < props.stock){
    setCantidad(cantidad + 1)
  }
}

  const handelRestar = () => {
      if(cantidad > 1){
    setCantidad(cantidad - 1)
  }
}

  const handelResetear = () => {
    setCantidad(1)
  }

  const onAdd = () => {
    setCantidad(onAdd)
    console.log("Agregar" + cantidad)
  }

  return (
    <div>
        <p>Mi contador va: {cantidad}</p>
      <button className="btnSumar" onClick={handelSumar} > + </button>
      <button className='btnReset' onClick={handelResetear}>RESET</button>
      <button className="btnRestar" onClick={handelRestar}> - </button><br />
      <button className='btnAgregar' 
        //disable={estado > stock || estado === 0} 
        onClick={()=>props.onAdd(cantidad)}>Confirmar compra
      </button>
      
      
    </div>
  )
}

export default ItemCount
import React from 'react'
import {useState} from "react"

const ItemCount = (props) => {

 
    let [cantidad, setCantidad] = useState(props.initial)
    
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

  //const onAdd = () => {
    //setCantidad(onAdd)
    //console.log("Agregar" + cantidad)
  //}

  return (
    <div>
        <h5>Cantidad seleccionada: {cantidad}</h5>
      <button className="btnSumar" onClick={handelSumar} > + </button>
      <button className='btnReset' onClick={handelResetear}>RESET</button>
      <button className="btnRestar" onClick={handelRestar}> - </button><br />
      <button className='btnConfirmar' 
        disable={cantidad || cantidad === 0} 
        onClick={()=>props.onAdd(cantidad)}>Confirmar compra
      </button>
      
      
    </div>
  )
}

export default ItemCount
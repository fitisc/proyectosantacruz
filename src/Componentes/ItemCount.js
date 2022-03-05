import React from 'react'
import {useState} from "react"

const ItemCount = (props) => {

  //const Contador = ({initial, stock}) => {
    let [estado, setEstado] = useState(props.initial)
  

  
//const [estado, setEstado] = useState(inicial)

  const handelSumar = () => {
    if(estado < props.stock){
    setEstado(estado + 1)
  }
}

  const handelRestar = () => {
      if(estado > 1){
    setEstado(estado - 1)
  }
}

  const handelResetear = () => {
    setEstado(1)
  }

  const onAdd = () => {
console.log(estado)
  }
  return (
    <div>
        <p>Mi contador va: {estado}</p>
      <button className="btnSumar" onClick={handelSumar} > + </button>
      <button className='btnReset' onClick={handelResetear}>RESET</button>
      <button className="btnRestar"onClick={handelRestar}> - </button><br />
      <button className='btnAgregar' onClick={onAdd}>Agregar a Carrito</button>
      
      
    </div>
  )
}

export default ItemCount
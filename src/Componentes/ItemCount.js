import React from 'react'
import {useState} from "react"

const ItemCount = () => {

    const inicial = 1
    const stock = 10

    const [estado, setEstado] = useState(inicial)

  const handelSumar = () => {
    if(estado < stock){
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
  return (
    <div>
        <p>Mi contador va: {estado}</p>
      <button className="btnSumar" onClick={handelSumar} > + </button>
      <button className='btnReset' onClick={handelResetear}>RESET</button>
      <button className="btnRestar"onClick={handelRestar}> - </button><br />
      
      
    </div>
  )
}

export default ItemCount
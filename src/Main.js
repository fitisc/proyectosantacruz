import React from 'react'
import ItemCount from './Componentes/ItemCount'


const Main = (props) => {
  
 

  return (
    <main>
      <h3>PRODUCTOS DESTACADOS {props.nombre}</h3>
      <ItemCount initial={1} stock={10} />
      <img src="#" alt="cards con imagenes" />
      <img src="#" alt="cards con imagenes" />
      <img src="#" alt="cards con imagenes" />
    </main>
  )
}

export default Main
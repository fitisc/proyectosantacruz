import React from 'react'

const Main = (props) => {
  console.log(props.nombre)
  
  return (
    <main>
      <h3>PRODUCTOS DESTACADOS {props.nombre}</h3>
      <img src="#" alt="cards con imagenes" />
      <img src="#" alt="cards con imagenes" />
      <img src="#" alt="cards con imagenes" />
    </main>
  )
}

export default Main
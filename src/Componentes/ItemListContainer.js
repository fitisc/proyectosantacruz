import React from 'react'

const ItemListContainer = (props) => {
console.log(props.saludo)
  return (
        <h2 className='saludoInicial'>¡Bienvenidos a {props.saludo}!</h2>

        
  )
}

export default ItemListContainer

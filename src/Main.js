import React from 'react'
import ItemCount from './Componentes/ItemCount'
import ItemDetailContainer from './Componentes/ItemDetailContainer'

import ItemListContainer from './Componentes/ItemListContainer'


const Main = (props) => {
  return( 
    <main>
      <h2 className='saludoInicial'>¡Bienvenidos a  {props.saludo}!</h2>
      <ItemListContainer saludo= "nuestra tienda online"/>
      
     
      <h3>PRODUCTOS DESTACADOS {props.nombre}</h3>
      <ItemDetailContainer/>
     
      
      
    </main>
  )}

export default Main
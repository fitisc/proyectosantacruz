import React from 'react'
import ItemCount from './Componentes/ItemCount'
import ItemDetailContainer from './Componentes/ItemDetailContainer'

import ItemListContainer from './Componentes/ItemListContainer'


const Main = (props) => {
  return( 
    <main>
      <ItemListContainer saludo= "nuestra tienda online"/>
     
      <h3>PRODUCTOS DESTACADOS {props.nombre}</h3>
      <ItemDetailContainer/>
     
      <ItemCount initial={1} stock={5} />
      
    </main>
  )}

export default Main
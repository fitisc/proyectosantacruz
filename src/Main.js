import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Carrito from './Componentes/Carrito'


const Main = (props) => {
  return( 
    <main>
      <h1 className='saludoInicial'>¡Bienvenidos a Tienda {props.nombre}!</h1>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        
        
      </Routes>
       
    </main>
  )}

export default Main
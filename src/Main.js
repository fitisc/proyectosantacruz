import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemCount from './Componentes/ItemCount'
import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Carrito from './Componentes/Carrito'


const Main = (props) => {
  return( 
    <main>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
       
    </main>
  )}

export default Main
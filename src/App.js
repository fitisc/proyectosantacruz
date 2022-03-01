//const App = () => "Hola Mundo flecha sin retorno" 

//commonJS:module.exports = App

//export default App //modulo que queres exportar

//rafce:
import React from 'react'

import Header from "./Header"
import Navbar from './Componentes/Navbar'
import ItemListContainer from './Componentes/ItemListContainer'
import Main from './Main'
import Footer from './Footer'


const App = () => {
  return (
    <>
        <Header />
        <Navbar/>
        <ItemListContainer saludo= "nuestra tienda online"/>
        <Main nombre= "HAPPY HIPPO" />
        <Footer/>
    </>
  )
}

export default App
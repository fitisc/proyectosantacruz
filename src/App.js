//const App = () => "Hola Mundo flecha sin retorno" 

//commonJS:module.exports = App

//export default App //modulo que queres exportar

//rafce:
import React from 'react'

import Navbar from './Componentes/Navbar'
import Main from './Main'
import Footer from './Footer'


const App = () => {
  return (
    <>
        <Navbar />
        <Main />
        <Footer/>
    </>
  )
}

export default App
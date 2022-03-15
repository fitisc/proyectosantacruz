//const App = () => "Hola Mundo flecha sin retorno" 

//commonJS:module.exports = App

//export default App //modulo que queres exportar

//rafce:
import React from 'react'
import Header from "./Header"
import Navbar from './Componentes/Navbar'
import Main from './Main'
//import ItemListContainer from './Componentes/ItemListContainer'
import Footer from './Footer'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <>
        <Header />
        <Navbar/>  
        <Main nombre= "HAPPY HIPPO" />
        <Footer/>
        <ToastContainer/>
    </>
    </BrowserRouter>
  )
}

export default App
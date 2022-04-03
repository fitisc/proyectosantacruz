import React from 'react'
import Header from "./Header"
import Navbar from './Componentes/Navbar'
import Main from './Main'
import Footer from './Footer'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom'
import MiProvider from './Componentes/Context/CartContext'



const App = () => {
  return (
    <BrowserRouter>
      <MiProvider>
        
        <Navbar />  
        <Main nombre= "HAPPY HIPPO" />
      </MiProvider>
        <Footer />
        <ToastContainer />
    </BrowserRouter>
    
  )
}

export default App
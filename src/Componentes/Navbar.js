import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (

    <nav className='nav'>
                <Link to="#" className='nav__link'>INICIO</Link>
            
    
                <Link to="#" className='nav__link'>PRODUCTOS</Link>
    
                <Link to="#" className='nav__link'>OFERTAS</Link>
        
                <Link to="#" className='nav__link'>CONTACTO</Link>
            <CardWidget /> 
        
    </nav>



  )
}

export default Navbar
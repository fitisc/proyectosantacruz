import React from 'react'
import Cardwidget from './Cardwidget'

const Navbar = () => {
  return (

    <nav className='nav'>
        <ul>
            <li>
                <a href="#" className='nav__link'>INICIO</a>
            </li>
            <li>
                <a href="#" className='nav__link'>PRODUCTOS</a>
            </li>
            <li>
                <a href="#" className='nav__link'>OFERTAS</a>
            </li>
            <li>
                <a href="#" className='nav__link'>CONTACTO</a>
            </li>
            <Cardwidget /> 
        </ul>
    </nav>



  )
}

export default Navbar
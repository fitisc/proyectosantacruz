import React from 'react'

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
            <span className="material-icons">shopping_cart</span>
            <li>
                <a href="#" className='nav__link'>CONTACTO</a>
            </li>
            
        </ul>
    </nav>



  )
}

export default Navbar
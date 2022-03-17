import React from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (

    <nav className='nav'>
                <NavLink to="/categoria/1" className='nav__link'>INICIO</NavLink>
            
    
                <NavLink to="/categoria/remeras" className='nav__link'>REMERAS</NavLink>
    
                <NavLink to="/categoria/pantalones" className='nav__link'>PANTALONES</NavLink>
        
                <NavLink to="/categoria/buzosycamperas" className='nav__link'>BUZOS/CAMPERAS</NavLink>
                <CardWidget /> 
        
    </nav>
    



  )
}

export default Navbar
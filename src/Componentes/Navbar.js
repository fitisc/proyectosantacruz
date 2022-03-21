import React from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (

    <nav className='nav'>
                <NavLink className='nav__link' to="/" >HOME</NavLink>
        
                <NavLink className='nav__link' to="/category/Remeras" >REMERAS</NavLink>
    
                <NavLink className='nav__link' to="/category/Pantalones" >PANTALONES</NavLink>
        
                <NavLink className='nav__link' to="/category/Buzos-Camperas">BUZOS/CAMPERAS</NavLink>
                <CardWidget /> 
        
    </nav>
    



  )
}

export default Navbar
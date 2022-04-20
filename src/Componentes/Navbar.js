import React from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from './CardWidget'
import logo from "../assets/imgs/logoHH.png"

const Navbar = () => {


  return (
    <>
      <div id='layouth-header'>
        <h1 className='header__title'>HAPPY HIPPO</h1>
        <h2 className='header__title'>Tienda de Ropa de 0 a 10 años</h2>
      </div>
      <nav className='nav'>
       
        <NavLink className='nav__link' to="/" >
          <img src={logo} alt="logo" className='nav__img'  />
        </NavLink>  
        
        <NavLink className='nav__link' to="/category/Remeras" >REMERAS</NavLink>
    
        <NavLink className='nav__link' to="/category/Pantalones" >PANTALONES</NavLink>
        
        <NavLink className='nav__link' to="/category/Buzos-Camperas">BUZOS/CAMPERAS</NavLink>
        <CardWidget /> 

        <NavLink className='nav__link' to="/test">Registrarse</NavLink>
     
        
      </nav>
    </>
    



  )
}

export default Navbar
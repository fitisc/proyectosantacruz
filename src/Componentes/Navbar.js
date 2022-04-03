import React from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {


  return (
    <>
      <header id='layouth-header' className=''>
        <h1 className='header__title'>HAPPY HIPPO</h1>
        <h2>Tienda de Ropa de 0 a 10 años</h2>
    
      </header>
      <nav className='nav'>
        <div className='nav__link'>
          <NavLink  to="/" >
            <img src="/img/logoHH.png" alt="" width="30%" />
          </NavLink>
        </div>  
        
        <NavLink className='nav__link' to="/category/Remeras" >REMERAS</NavLink>
    
        <NavLink className='nav__link' to="/category/Pantalones" >PANTALONES</NavLink>
        
        <NavLink className='nav__link' to="/category/Buzos-Camperas">BUZOS/CAMPERAS</NavLink>
        <CardWidget /> 
                
        
      </nav>
    </>
    



  )
}

export default Navbar
import React from 'react'
import FreeCodeCampLogo from '../imagenes/FreeCodeCamp-logo.png'
import '../hojas-de-estilos/LogoFreeCodeCamp.css'

export default function LogoFreeCodeCamp() {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img 
        src={FreeCodeCampLogo}
        className='freecodecamp-logo'
        alt='logo freecodecamp'/>
    </div>
  )
}

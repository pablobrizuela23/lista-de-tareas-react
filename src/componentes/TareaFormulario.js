import React, { useState } from 'react'
import '../hojas-de-estilos/TareaFormulario.css'

export default function TareaFormulario(props) {

  const [input,setInput] = useState('');

  const manejarCambio = e =>{
    console.log("escribiendo...");
  }

  const manejarEnvio = e =>{
    const tareaNueva = {
      id: '4587',
      texto:'texto'
    };
  }

  return (
    <form className='tarea-formulario'>
        <input 
        className='tarea-input'
        type='texto'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
        />
        <button className='tarea-boton'>
            Agregar Tarea
        </button>
    </form>
  )
}

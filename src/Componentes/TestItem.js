import React from 'react'

const TestItem = ({usuario, borrarUsuario}) => {

    const handleClick = () => {
        console.log("borrando", usuario.nombre)
        borrarUsuario(usuario.id)
    }
  return (
    <div>
        <p>{usuario.nombre}</p>
        <button onClick={handleClick}>Borrar usuario</button>
    </div>
  )
}

export default TestItem
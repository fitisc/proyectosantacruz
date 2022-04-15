import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {
     const [form, setForm] = useState({ nombre: "", email: "", password: "" });
     

     const handleChange = (e) => {
         return setForm({ ...form, [e.target.name]: e.target.value });

        }
        const handleEnviar = () => {
          // setForm({ nombre: "", email: "", password: "" });
          console.log(form);
         toast.success("¡Tus datos fueron guardados exitosamente!");
        }

  return (
    <div>
        <form className='formUsuario'>
          <h4 className='titForm'>Ingresa tus datos</h4>
            <input
            value={form.nombre}name='nombre' 
            type="text" placeholder="Nombre" 
            onChange={handleChange} /><br/>
            <input 
            value={form.email} 
            name='email' 
            type="email" placeholder="Email" 
            onChange={handleChange}
             /><br/>
            <input 
            value={form.password}
            name='password' type="password" placeholder="Password" onChange={handleChange} /><br/>
            <button className='btn-Enviar' type="submit" onClick={handleEnviar}>Enviar</button>
        </form>
    </div>
  )
}

export default Form
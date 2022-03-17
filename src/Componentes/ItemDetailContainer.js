import React, { useEffect, useState } from 'react'
import productos from '../database/productos'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'

function getDatos() {
  return new Promise((resolve, reject) =>{
    setTimeout(function(){
      resolve(productos);
    },2000);
  });
}
//let producto =

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {idProducto} = useParams()
    
    useEffect(() => {
      console.log(idProducto)
  
      getDatos()
        .then(respuestaPromise => setItem(respuestaPromise))
       
        //setItems(respuestaPromise)
       .catch((error) => {
         toast.error("Error al cargar los productos...")
       })
       .finally(()=>{
         setLoading(false)
       })
  
    }, [idProducto]);
    
    
    if(loading){
      return <h1>Cargando...</h1>
    }else{
      return <ItemDetail item={item}/>
  
  }
   
}

export default ItemDetailContainer
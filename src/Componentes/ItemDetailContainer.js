import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import { getDatos } from '../FireBase/Index'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams()
    
    useEffect(() => {
      
      getDatos(idItem)
        .then(respuestaPromise => setItem(respuestaPromise))
        
        .catch((error) => {
         toast.error("Error al cargar los productos...")
       })
        .finally(()=>{
         setLoading(false)
       })
  
    }, [idItem]);
    
    
    if(loading){
      return <h1>Cargando...</h1>
    }else{
      return <ItemDetail item={item}/>
  
  }
   
}

export default ItemDetailContainer
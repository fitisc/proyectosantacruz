import React, { useEffect, useState } from 'react'
import productos from '../database/productos'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'

function getDatos(idItem) {
  return new Promise((resolve, reject) =>{
    setTimeout(function(){
      let itemNew = productos.find(function(itemIterado){
        return (itemIterado.id === Number(idItem))
      });
      resolve(itemNew);
    },500);
  });
}
//let producto =

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams()
    
    useEffect(() => {
      //console.log(idItem)
      getDatos(idItem)
        .then(respuestaPromise => setItem(respuestaPromise))
        //setItem(respuestaPromise)
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
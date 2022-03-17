import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import productos from '../database/productos'
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

function getDatos() {
  return new Promise((resolve, reject) =>{
    setTimeout(function(){
      resolve(productos);
    },2000);
  });
}


function ItemListContainer(props) {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const idCategoria = useParams()
  
  useEffect(() => {
    toast.info("Trayendo productos...")
    console.log(idCategoria)

    getDatos()
      .then(respuestaPromise => setItems(respuestaPromise))
     // toast.dismiss("")
      //setItems(respuestaPromise)
     .catch((error) => {
       toast.error("Error al cargar los productos...")
     })
     .finally(()=>{
       setLoading(false)
     })

  }, [idCategoria]);

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return <ItemList item={items}/>

}
}

export default ItemListContainer

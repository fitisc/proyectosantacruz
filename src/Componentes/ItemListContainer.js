import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import productos from '../database/productos'
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

function getDatos(categoryid) {
  return new Promise((resolve, reject) =>{
    setTimeout(function(){
      //console.log(categoryid);
      if(!categoryid){
        resolve(productos);
      }
      else{
        let prendas = productos.filter( item => item.category === categoryid);
        resolve(prendas);
      }
      
        }, 500);
       });
        
  }


function ItemListContainer(props) {
  
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const {categoryid} = useParams()
  
  useEffect(() => {
    toast.info("Trayendo productos...")
    //console.log(categoryid)

    getDatos(categoryid)
      .then(respuestaPromise => setItems(respuestaPromise))
     // toast.dismiss("")
      //setItems(respuestaPromise)
     .catch((error) => {
       toast.error("Error al cargar los productos...")
     })
     .finally(()=>{
       setLoading(false)
     })

  }, [categoryid]);

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return <ItemList item={items}/>

}
}

export default ItemListContainer

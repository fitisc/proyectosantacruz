import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import productos from '../database/productos'
import ItemList from './ItemList';

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

  useEffect(() => {
    toast.info("Trayendo productos...")
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

  }, []);

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return <ItemList item={items}/>

}
}

export default ItemListContainer

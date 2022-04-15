import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import { getAllProductos, getAllProductosFrom } from '../FireBase/Index';
import portada from '../assets/imgs/portada.png'


function ItemListContainer(props) {
  
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const {categoryid} = useParams()
  
  useEffect(() => {
    if(categoryid){
      getAllProductosFrom(categoryid)
      .then(respuestaPromise => setItems(respuestaPromise))
      .finally(()=>{ setLoading(false)});
    }else{
      getAllProductos()
      .then(respuestaPromise => setItems(respuestaPromise))
      .catch((error) => { toast.error("Error al cargar los productos...")})
       .finally(()=>{ setLoading(false)});
    } 
  }, [categoryid]);

  
    return ( 
    <>
      <div><img src={portada} alt="portada" className='portada'  />
      </div>
      <h2 className='tituloCatalogo'>Catálogo de prendas</h2>
     
      { loading ? <h1>Cargando...</h1> : <ItemList item={items} /> }
    </>
    )
    }
export default ItemListContainer

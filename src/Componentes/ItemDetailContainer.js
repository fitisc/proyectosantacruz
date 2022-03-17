import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'


let producto = {
    "id": 1,
    "title": "Blusa Mundo",
    "description": "Blusa de algodón, con vuelos en mangas y cintura, cuello a la base",
    "price": 1200,
    "category": "Blusas",
    "imageUrl": "/img2/blusamundo2.png",
    "stock": 6
  }

const ItemDetailContainer = () => {

    
    const [producto, setProductos] = useState({})
    const idProducto = useParams()
    

    useEffect(() => {
      const pedido = new Promise((res,rej) => {
          setTimeout(() =>{
              res(producto)
          }, 2000)
          console.log(idProducto)
      })
      pedido
      .then((resultado)=>{
          console.log("Todo bien")
          setProductos(resultado)
      })
      .catch((error)=>{
          console.log("Algo salió mal")
          toast.error("Algo salió mal")
      })
      
    }, [idProducto])
    
  return (
      <>
      <ItemDetail producto={producto}/>

    </>
  )
}

export default ItemDetailContainer
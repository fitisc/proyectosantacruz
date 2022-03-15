import React, { useEffect, useState } from 'react'
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

    
    const [productos, setProductos] = useState({})

    useEffect(() => {
      const pedido = new Promise((res,rej) => {
          setTimeout(() =>{
              res(producto)
          }, 2000)
      })
      pedido
      .then((resultado)=>{
          console.log("Todo bien")
          setProductos(resultado)
      })
      .catch((error)=>{
          console.log("Algo salió mal")
      })
      
    }, [])
    
  return (
      <>
      <ItemDetail producto={productos}/>

    </>
  )
}

export default ItemDetailContainer
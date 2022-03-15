import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

let producto = {
    "id": 1,
    "title": "Remera Timon",
    "description": "Remera de algodon color rojo con dibujo de timón blanco, cuello a la base, manga corta",
    "price": 1200,
    "category": "Remeras",
    "imageUrl": "./public/img/blusamundo.png",
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
      <ItemDetail producto={productos}/>
    
  )
}

export default ItemDetailContainer
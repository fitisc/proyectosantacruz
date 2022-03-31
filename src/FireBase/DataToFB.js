import {db} from "./index"
import { collection, setDoc, doc} from "firebase/firestone/lite"
import { async } from "@firebase/util"

const productos = [{
    "id": 1,
    "title": "Remera Timon",
    "description": "Remera de algodon para todo uso, suave y comoda al momento de jugar...",
    "price": 1200,
    "category": "Remeras",
    "imageUrl": "/img2/remeratimon.png",
    "stock": 5
  }, {
    "id": 2,
    "title": "Jogging",
    "description": "Pantalon de frizza con puños en los tobillos para mejorar la comodidad a la hora de realizar actividad fisica o cualquier juego en posicion de sentado, de rodillas o en movimiento",
    "price": 1800,
    "category": "Pantalones",
    "imageUrl":"/img2/jogginsport.png",
    "stock": 4
  }, {
    "id": 3,
    "title": "Buzo cangurito",
    "description": "Buzo con cierre y capucha color verde",
    "price": 2500,
    "category": "Buzos-Camperas",
    "imageUrl": "/img2/buzocanguro.png",
    "stock": 3
  }, {
    "id": 4,
    "title": "Campera rompeviento",
    "description": ", ideal para los dias lluviosos y frescos",
    "price": 3500,
    "category": "Buzos-Camperas",
    "imageUrl": "/img2/camperaverde.png",
    "stock": 4
  }, {
    "id": 5,
    "title": "Buzo capucha",
    "description": "Buzo de frizza, con cierre y capucha",
    "price": 2500,
    "category": "Buzos-Camperas",
    "imageUrl": "/img2/canguroazul.png",
    "stock": 5
  }, {
    "id": 6,
    "title": "Blusa Mundo",
    "description": "Blusa de algodón, con vuelos en mangas y cintura, cuello a la base",
    "price": 1200,
    "category": "Remeras",
    "imageUrl": "/img2/blusamundo.png",
    "stock": 6
    }
  ]

  async function dataFirebase() {
      const miColeccion = collection(db, "productos")
      productos.forEach((item) => {
          
          const newDoc = doc(miColeccion)

          setDoc(newDoc, item).then(() => {
              console.log("Document written with id: ", newDoc.id)
              .catch(err =>{
                  console.log("error adding document: ", err);
              });
          });
      })
  }
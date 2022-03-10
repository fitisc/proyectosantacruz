import React, {useEffect, useState} from 'react'
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    getDatos()
      .then(respuestaPromise => setItems(respuestaPromise))
      setItems(items)
    //.catch( error => console.error(error));
  }, []);

  console.log(productos)

  return (
    <>
    <h2 className='saludoInicial'>¡Bienvenidos a  {props.saludo}!</h2>
    <ItemList item={items} />
    </>



  );
}

export default ItemListContainer

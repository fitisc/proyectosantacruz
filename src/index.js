import React from 'react';
import ReactDOM from 'react-dom';
import items from './database/productos.js'; 


import App from "./App.js"
import "./estilos.css"




ReactDOM.render(<App/>, document.getElementById('root')
);


const carrito = [];


 const itemDetail = items[0];

 const carrito2 = [...carrito, itemDetail];
 console.log(carrito2);
  

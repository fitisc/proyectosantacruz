import React, { createContext, useState } from 'react'


export const contexto = createContext()

const { Provider } = contexto



const MiProvider = ({ children }) =>{
   const [carrito, SetCarrito] = useState([])
  

   const addToCart = (item, cantidad) => {
    const copiaCarrito = [...carrito];
    const itemAlCarrito = {...item, cantidad}
    
    if(isOnCart(item.id)){
        let index = copiaCarrito.findIndex(item => item.id === item.id);//nos dice en que posicion del array esta 
        copiaCarrito[index].cantidad += cantidad;
        SetCarrito(copiaCarrito)
    }else{
    copiaCarrito.push(itemAlCarrito);
        SetCarrito(copiaCarrito)
    }
//if (ya existecarrito(id){}else(copia.push)) 
    //traerla al itemDetail
//siempre que quiera modificar un estado y es obj/array lo tengo que copiar
   //const copia = carrito.slice(inicio p cortar, fin p cortar0)
//o con el operador spread
   }

    const isOnCart = (id) => {
       return carrito.some((prod) => prod.id === id); 
            
       }
       //retornas true o false
    
    const calcularCantidad = (function () {
        let cantidad = 0;
        carrito.forEach((prod) => cantidad = prod.cantidad);
        return cantidad;
    })

 
    const calcularTotal = () => {
     let totalCarrito = 0;
     carrito.forEach((prod) => {totalCarrito += prod.cantidad * prod.price;});
     return totalCarrito;   
    
    };

    const calcularTotalUnidades = () => {
        let totalUnidades = 0;
        carrito.forEach((prod) => {totalUnidades += prod.cantidad;});
        return totalUnidades;   
       
       };
   

    const borrarProd = (id) => {
     SetCarrito(carrito.filter((prod) => prod.id !== id))
//busco en el carrito y con filter lo removes       
}
   

     const vaciarCarrito = () => {
      SetCarrito([])

   };

  


    const valorDelContexto = {
        carrito: carrito,
        addToCart: addToCart,
        calcularCantidad: calcularCantidad,
        isOnCart: isOnCart,
        calcularTotal: calcularTotal,
        calcularTotalUnidades: calcularTotalUnidades,
        vaciarCarrito: vaciarCarrito,
        borrarProd: borrarProd
      
    }
    
    return(
        <Provider value={valorDelContexto}>
            {children}

        </Provider>
    )
    }

export default MiProvider

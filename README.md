### CODERHOUSE
[![Netlify Status](https://api.netlify.com/api/v1/badges/49452fdc-8a4e-49aa-b791-3becf49419bc/deploy-status)](https://app.netlify.com/sites/fancy-manatee-1171c6/deploys)

##PROYECTO E-COMMERCE: CURSO REACT.JS 
##Tienda HAPPY HIPPO: Ropa desde 0 a 10 años


![](/src/assets/imgs/logoHH.png)


![DEMO](./src/assets/imgs/tiendahh.gif)

### SOBRE EL PROYECTO:
---
Mi proyecto se basa en un e-commerce de una tienda de ropa infantil de 0 a 10 años. 
Se utiliza React 17.0.2 para la creación del mismo.

 La organización del código se basó en la metodologia que utiliza REACT para estructurar los componentes presentacionales y contenedores generando un contexto determinado para su funcionamiento dinámico. 
Los archivos estáticos (html, logos, img,etc) se encuentran ubicados en la carpeta "public". Mientras que los archivos dinámicos que tienen formato js(react) están ubicados dentro de la carpeta "src" del proyecto.

El archivo CSS se encuentra también en la carpeta "src". Se confeccionó manualmente sin utilizar librerias externas. Contiene todos los estilos utilizados con clases o etiquetas en el código ordenado teniendo en cuenta los "contenedores/contenidos en" y por su funcionalidad ( por ejemplo: todos los botones estan al final, uno seguido del otro, después de todas las estructuras de la página, o los estilos de los artículos y productos).

La paleta de colores utilizada se basa en los colores del logo de la marca.

Se utilizan 2 carpetas de imagenes, una en public y otra en src, su ubicacion se tuvo en cuenta por la forma en que necesitan interactuar las imagnenes en el contenido.

Se guardan los datos de los productos y ordenes de compras en FIREBASE.

###DEMO:



### Pasos de instalacion de Create React App:
```
En CMD:
cd curso react/proyectosantacruz
npm install create react app
npm start
git bash/git CMD (para guardar proyecto en git e ir commitiando los cambios realizados)
github (repositorio en la nube de github) Se realizan los push correspondientes en branch MASTER. 
Branch MAIN solo tiene las primeras cargas del proyecto.

git clone : https://github.com/fitisc/proyectosantacruz.git

 Firebase: https://console.firebase.google.com/u/0/project/happyhippo-tienda/firestore/data/~2Forders




``` 
#### Tecnologias utilizadas:

* **"React": "^17.0.2"**,
* **"React-dom": "^17.0.2"**
Es el framework de Javascript utilizado y aprendido en el curso para la creacion de una aplicacion e-commerce.

+ **"Firebase": "^9.6.10"**
 Se utiliza como base de datos para guardar los productos de la tienda y las ordenes de compra de los usuarios.

* **"React-router-dom": "^6.2.2"**
Libreria que se ituliza para facilitar la navegacion de la pagina.

+  **"React-toastify": "^8.2.0"**
 se instaló para que el usuario tenga una notificacion sobre el resultado de sus elecciones sobre la compra.

*  **"React-scripts": "5.0.0"**,
+  **"web-vitals": "^2.1.4"** 
Son dependecias propias de React.

* **"ESLint v2.2.2 y Prettier ESLint v3.1.0"**
Se utiliza para asegurarse de utilizar en el codigo buenas costumbres y que esté prolijo para su lectura e interpretación.

+ **GITHUB**
Se utiliza para guardar el proyecto en la nube

* **NETIFLY**
Se utiliza como hosting para hacer el deploy del proyecto.




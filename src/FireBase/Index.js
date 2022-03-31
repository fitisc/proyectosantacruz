// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP72iCFVjQkGHP0aLNYLZ73v8rZ1TH1jg",
  authDomain: "happyhippo-tienda.firebaseapp.com",
  projectId: "happyhippo-tienda",
  storageBucket: "happyhippo-tienda.appspot.com",
  messagingSenderId: "312342696909",
  appId: "1:312342696909:web:1420df65fd32d6ac03ea84",
  measurementId: "G-PE1GGW4KFR"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//obtener los items
export async function getAllProductos(){
  //obtener ref a la coleccion
  const miColec = collection(db, "productos");
  const productSnap = await getDocs(miColec);

  return productSnap.docs.map(item => item.data())
  //const result = productSnap.docs.map(item =>{
   // return {...item.data(), id: item.id}
 // });

  //return result;
}

export async function getAllProductosFrom(category){
 
  const miColec = collection(db, "productos");
  const myquery = query(miColec, where("category", "==",  category));

  const productSnap = await getDocs(myquery);

  return productSnap.docs.map(item => item.data())
  
}

 //obtener un solo item
export async function getDatos(id){
  const idN = Number(id);
  const miColec = collection(db, "productos");
  const myquery = query(miColec, where("id", "==",  idN));
 
  const resultDoc = await getDocs(myquery);
     return resultDoc.docs[0].data()
 
}
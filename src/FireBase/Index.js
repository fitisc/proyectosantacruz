import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, addDoc, serverTimestamp } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyDP72iCFVjQkGHP0aLNYLZ73v8rZ1TH1jg",
  authDomain: "happyhippo-tienda.firebaseapp.com",
  projectId: "happyhippo-tienda",
  storageBucket: "happyhippo-tienda.appspot.com",
  messagingSenderId: "312342696909",
  appId: "1:312342696909:web:1420df65fd32d6ac03ea84",
  measurementId: "G-PE1GGW4KFR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getAllProductos(){

  const miColec = collection(db, "productos");
  const productSnap = await getDocs(miColec);

  return productSnap.docs.map(item => item.data())

}

export async function getAllProductosFrom(category){
 
  const miColec = collection(db, "productos");
  const myquery = query(miColec, where("category", "==",  category));

  const productSnap = await getDocs(myquery);

  return productSnap.docs.map(item => item.data())
  
}

export async function getDatos(id){
  const idN = Number(id);
  const miColec = collection(db, "productos");
  const myquery = query(miColec, where("id", "==",  idN));
 
  const resultDoc = await getDocs(myquery);
     return resultDoc.docs[0].data()
 
}

export async function sendBuyOrder(order){
  const miColect = collection(db, "orders");
  const orderFecha = {...order, timestamp: serverTimestamp()}
  const orderDoc = await addDoc(miColect, orderFecha);
  return (orderDoc.id);
  
}

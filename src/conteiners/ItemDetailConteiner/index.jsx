import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
//import productos from "../../data/products.json"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';
//import ItemCount from '../../components/ItemCount';

const ItemDetailContainer = () => {
  //const [count, setCount] = useState(1)  

  //const sumarContador = () => {
   //if (count < stock && stock > 1){
   //   setCount (count + 1)
  //}
//}
//const restarContador = () => {
  //if (count > 1){
  //setCount (count - 1)
  //}
//}
//const stock = 10

const [detail, setDetail] = useState ({})

const {id} = useParams()

useEffect(() => {
  //const promesa = new Promise((resolve, reject) => {
    //setTimeout (() => {
      //resolve(productos);
    //}, 2000);   
  //});

  const getProduct = async () =>{
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const productDetail = {
      id: docSnap.id,
      ...docSnap.data()
    }
     setDetail(productDetail);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
getProduct()

//fetch (`https://fakestoreapi.com/products/${id}`)
//.then(response=> {
 // console.log(response);
//  return response.json()
///})
//.then(json=> {
 // console.log(json)
 // setDetail(json)
//})
//.then ((result) =>{
    //setProducts(result);
  //})
//  .catch((err) => {
//    alert("Hubo un error")
 // });
},[])
//console.log(products);

  return (
    <div>
      {/*<h1 className='greeting'>{greeting}</h1>*/}
      {/*louder de carga*/}
      {
        Object.keys(detail).length === 0
        ? <Spinner animation="border" variant="warning"/>
        : <ItemDetail detail = {detail}/>
        
      }
     {/* <aside>
       <h4></h4>
       <ItemCount stock={20} initial={1}/>
    </aside>*/}

      {/*<div>stock disponible{stock}</div>
      <button className='boton' onClick={restarContador}> - </button>
      <span>{count}</span>
      <button className='boton' onClick={sumarContador}> + </button>
  <button>Confirmar compra</button>*/}
      
  </div>
  )
}


export default ItemDetailContainer

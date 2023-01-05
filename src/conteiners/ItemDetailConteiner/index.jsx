import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
//import productos from "../../data/products.json"


const ItemDetailContainer = () => {
  const [count, setCount] = useState(0)  

  const sumarContador = () => {
   if (count < stock && stock > 0){
      setCount (count + 1)
  }
}
const restarContador = () => {
  if (count > 0){
  setCount (count - 1)
  }
}
const stock = 10

const [detail, setDetail] = useState ({})

const {id} = useParams()

useEffect(() => {
  //const promesa = new Promise((resolve, reject) => {
    //setTimeout (() => {
      //resolve(productos);
    //}, 2000);   
  //});
fetch (`https://fakestoreapi.com/products/${id}`)
.then(response=> {
  console.log(response);
  return response.json()
})
.then(json=> {
  console.log(json)
  setDetail(json)
})
//.then ((result) =>{
    //setProducts(result);
  //})
  .catch((err) => {
    alert("Hubo un error")
  });
},[])
//console.log(products);

  return (
    <div>
      {/*<h1 className='greeting'>{greeting}</h1>*/}
      <div>stock disponible{stock}</div>
      <button className='boton' onClick={restarContador}> - </button>
      <span>{count}</span>
      <button className='boton' onClick={sumarContador}> + </button>
      <ItemDetail detail = {detail}/>
    </div>
  )
}


export default ItemDetailContainer

import React, { useState } from 'react'
import { useEffect } from 'react';
import "./styles.css";
//import productos from "../../data/products.json"
import ItemList from '../../components/ItemList/Index';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {  

const {categoryId} = useParams()

console.log(categoryId)

const [products, setProducts] = useState ([])
useEffect(() => {
  //const promesa = new Promise((resolve, reject) => {
    //setTimeout (() => {
      //resolve(productos);
    //}, 2000);   
  //});
fetch ('https://fakestoreapi.com/products')
.then(response=> {
  console.log(response);
  return response.json()
})
.then(products=> {
  if(categoryId){
  const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
  console.log(products)
  setProducts(productosFiltradosPorCategoria)
  } else{
    setProducts(products)
  }
})

//.then ((result) =>{
    //setProducts(result);
  //})
  .catch((err) => {
    alert("Hubo un error")
  });
},[categoryId])
console.log(products);

  return (
    <div>
      {/*<h1 className='greeting'>{greeting}</h1>*/}
      {/*<div>stock disponible{stock}</div>
      <button className='boton' onClick={restarContador}> - </button>
      <span>{count}</span>
  <button className='boton' onClick={sumarContador}> + </button>*/}
      <ItemList productos = {products}/>
    </div>
  )
}


export default ItemListContainer

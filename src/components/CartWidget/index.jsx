import React from 'react'
import { useContext } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';


const CartWidget = () => {
  const {countCart} = useContext(Shop)
  console.log(countCart)
  
  return ( 
   <>  
    <Link to="/cart"><HiShoppingCart style={{height: 50, width: 50, color: 'black'}}/></Link> 
    <span>{countCart()}</span>    
   </>
  )
}

export default CartWidget
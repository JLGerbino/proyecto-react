import React from 'react'

const ItemDetail = ({detail}) => {
   const {title, price, description, image} = detail
   console.log(price);
   return (
    <div>
        <div>{title}</div>
        <div>Precio ${price}</div>        
        <img src={image} alt="imagen" width={300} height={400}/>
        <div>{description}</div>        
    </div>
  )
}

export default ItemDetail
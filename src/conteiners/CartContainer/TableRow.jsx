import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import { BsFillTrashFill } from "react-icons/bs";

const TableRow = ({product}) => {
  const {removeProduct} = useContext(Shop)
  return (
  
    <tr>
      <th scope="row">{product.id}</th>
      <td><img width={80} height={100} src={product.image} alt="table-row" /></td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>      
      <td><button onClick={()=>removeProduct(product.id)}><BsFillTrashFill/></button></td>
    </tr>     
  )
}

export default TableRow
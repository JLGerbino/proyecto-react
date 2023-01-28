import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";

const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0)

  const {addProduct} = useContext(Shop)
  
  const onAdd = (cantidad) => {
    console.log(`Se agregó una cantidad de productos: ${cantidad}`);
    setQuantity(cantidad)
    addProduct({...detail, quantity: cantidad})    
  };
  
  const { title, price, description, image, stock } = detail;
  console.log(price);
  return (
    <div>
      <div>{title}</div>
      <div>Precio ${price}</div>
      <img src={image} alt="imagen" width={300} height={400} />
      <div>{description}</div>
      <aside>
        {stock === 0 ?
        <button className="btn btn-primary p-2" >No hay stock</button>
        :
        quantity === 0 ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        ) : (
          <button className="btn btn-primary p-2">
            <Link to="/cart">Go cart</Link>
          </button>
        )}
      </aside>
    </div>
  );
};

export default ItemDetail;

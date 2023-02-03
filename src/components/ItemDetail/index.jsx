import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "./styles.css"

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
      <div className="detail">
      <div>{title}</div>
      <div>Precio ${price}</div>
      <img src={image} alt="imagen" width={200} height={300} />
      <div>{description}</div>
      </div>
      <aside>
        {stock === 0 ?
        <button className="btn btn-primary p-2" >No hay stock</button>
        :
        quantity === 0 ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        ) : (  
        <div className="cart">        
          <button className="btn btn-primary p-2">
            <Link to="/cart" style={{color: "white",textDecoration:"none"}}>Ir al carrito</Link>
          </button>
        </div>          
        )}
      </aside>
    </div>
  );
};

export default ItemDetail;

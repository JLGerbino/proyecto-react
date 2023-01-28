import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import TableRow from "./TableRow";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";
import generateOrderObject from "../../services/generateOrderObjets";
//import { async } from "@firebase/util";
import { db } from "../../firebase/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormComp from "../../components/Form";
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
//import { useState } from "react";

const Cart = () => {
  const { products, total, cleanCart } = useContext(Shop);
  const [formVis, setFormVis] = useState(false)
  const [loader, setLoader] = useState(false);

  const confirmPurchase = async (dataDelFormulario) => {
    const {nombre, email, phone} = dataDelFormulario
    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre: nombre,
        email: email,
        telefono: phone,
        cart: products,
        total: total(),
      });
      console.log(order);
      //setFormVis(true)
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();

      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        //Set the "capital" field of the city 'DC'
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity,
        });
      }
      Swal.fire({
        icon: 'success',
        title: 'Orden confirmada con ID: ' + docRef.id,
        text: 'Muchas gracias por su compra!',        
      })
      //alert("Orden confirmada con ID: " + docRef.id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  };
  return (
    <>
      {products.length !== 0 ? (
        <>
          <table className="table table-success table-striped ">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">image</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <TableRow key={product.id} product={product} />;
              })}
            </tbody>
          </table>
          {loader ? (
            <Spinner animation="border" variant="warning"/>
          ) : (
            <button onClick={()=>setFormVis(true)}>Corfirm purchase</button>
          )}
        </>
      ) : (
        <>
          <h1>No hay productos en el carrito</h1>
          <button>
            <Link to="/">Volver a comprar</Link> 
          </button>
        </>
      )}
      {formVis ?
        <FormComp         
        confirmPurchase = {confirmPurchase}
        formVis = {formVis}
        setFormVis = {setFormVis}
      />
      : null
      }
    </>
  );
};

export default Cart;

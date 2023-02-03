import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import TableRow from "./TableRow";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";
import generateOrderObject from "../../services/generateOrderObjets";
import { db } from "../../firebase/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormComp from "../../components/Form";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

const Cart = () => {
  const { products, total, cleanCart } = useContext(Shop);
  const [formVis, setFormVis] = useState(false);
  const [loader, setLoader] = useState(false);

  const confirmPurchase = async (dataDelFormulario) => {
    const { nombre, email, phone } = dataDelFormulario;
    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre: nombre,
        email: email,
        telefono: phone,
        cart: products,
        total: total(),
      });
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();

      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity,
        });
      }
      Swal.fire({
        icon: "success",
        title: "Orden confirmada con ID: " + docRef.id,
        text: "Muchas gracias por su compra!",
      });
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
          <table className="table table-ligth table-striped ">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <TableRow key={product.id} product={product} />;
              })}
            </tbody>                    
          <h4>{`Total de su compra $ ${total()}`} </h4>          
          </table>
          {loader ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            <div className="cart">
            <button className="btn btn-primary p-2" onClick={() => setFormVis(true)}>Confirmar compra</button>
            </div>
          )}          
        </>
      ) : (
        <>
          <div className="cart">
            <h2>No tenes productos en el carrito</h2>
            <button className="btn btn-primary p-2">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Volver a comprar
              </Link>
            </button>
          </div>
        </>
      )}
      {formVis ? (
        <FormComp
          confirmPurchase={confirmPurchase}
          formVis={formVis}
          setFormVis={setFormVis}
        />
      ) : null}
    </>
  );
};

export default Cart;

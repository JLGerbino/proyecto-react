import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
//import productos from "../../data/products.json"
import Ad from "../../components/Ad";
import ItemList from "../../components/ItemList/Index";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

console.log(db);

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  console.log(categoryId);

  const [products, setProducts] = useState([]);
  const [adVisibility, setAdVisivility] = useState(true);

  useEffect(() => {
    //const promesa = new Promise((resolve, reject) => {
    //setTimeout (() => {
    //resolve(productos);
    //}, 2000);
    //});

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(
          collection(db, "products"),
          where("category", "==", categoryId)
        );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }

      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const product = {
          id: doc.id,
          ...doc.data(),
        };
        productosFirebase.push(product);
      });
      setProducts(productosFirebase);
    };
    getProducts();
    //fetch("https://fakestoreapi.com/products")
    // .then((response) => {
    // console.log(response);
    // return response.json();
    // })
    // .then((products) => {
    //  if (categoryId) {
    //   const productosFiltradosPorCategoria = products.filter(
    //      (producto) => producto.category === categoryId
    //  );
    //    console.log(products);
    //   setProducts(productosFiltradosPorCategoria);
    //} else {
    //    setProducts(products);
    //  }
    // })

    //.then ((result) =>{
    //setProducts(result);
    //})
    //.catch((err) => {
    //    alert("Hubo un error");
    //  });
  }, [categoryId]);
  const handleCloseAd = () => setAdVisivility(false);
  console.log(products);

  return (
    <div>
      {/*<h1 className='greeting'>{greeting}</h1>*/}
      {/*<div>stock disponible{stock}</div>
      <button className='boton' onClick={restarContador}> - </button>
      <span>{count}</span>
  <button className='boton' onClick={sumarContador}> + </button>*/} 
    {Object.keys(products).length === 0
        ? <Spinner animation="border" variant="warning"/>
        :
      <ItemList productos={products} />}
      {adVisibility === true ? (
        <Ad>
          <h3>
            Queres vender tus alhajas? Ofrecemos a nuestros clientes la máxima
            seguridad y el mejor precio del mercado
          </h3>
          <button
            style={{
              width: 100,
              padding: 8,
              border: "2px solid black",
            }}
            onClick={handleCloseAd}
          >
            Cerrar
          </button>
        </Ad>
      ) : null}
    </div>
  );
};

export default ItemListContainer;

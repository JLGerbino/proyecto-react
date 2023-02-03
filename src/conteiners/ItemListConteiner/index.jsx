import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import Ad from "../../components/Ad";
import ItemList from "../../components/ItemList/Index";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";

console.log(db);

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  console.log(categoryId);

  const [products, setProducts] = useState([]);
  const [adVisibility, setAdVisivility] = useState(true);

  useEffect(() => {
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
  }, [categoryId]);
  const handleCloseAd = () => setAdVisivility(false);
  console.log(products);

  return (
    <div>
      {Object.keys(products).length === 0 ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <ItemList productos={products} />
      )}
      {adVisibility === true ? (
        <Ad>
          <div>
            <img
              src="../assets/images/promo.jpg"
              alt="ad"
              height={400}
              width={700}
            />
          </div>
          <button
            style={{
              backgroundColor: "orange",
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

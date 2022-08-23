import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    getAllProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <div>
      {products ? (
        products.map((product) => {
          return (
            <div key={product.id}>
                    <h2>{product.title}</h2>
              <h3>{product.brand}</h3>
          
            </div>
          );
        })
      ) : (
        <h1>Loading . . . </h1>
      )}
    </div>
  );
};

export default AllProducts;

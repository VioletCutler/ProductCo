import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    getAllProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <div className='page'>
      <h2 className='title'>Popular Right Now:</h2>
      <div className="container">
        {products ? (
          products.map((product) => {
            return (
              <section key={product.id}>
                <img src={product.thumbnail}></img>
                <h2>
                  {product.brand} {product.title}
                </h2>
                <p>{product.description}</p>
              </section>
            );
          })
        ) : (
          <h1>Loading . . . </h1>
        )}
      </div>
    </div>
  );
};

export default AllProducts;

import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchProducts } from "../api";

const Search = () => {
  const [products, setProducts] = useState([])

  const { state } = useLocation();
  console.log("products", products);

  useEffect(() => {
    searchProducts(state)
    .then(fetchedProducts => setProducts(fetchedProducts))
  }, [])

  return (
    <div className='page'>
        <div className='container'>
        {products ? (
          products.map((product) => {
            return (
              <section key={product.id}>
                <img src={product.thumbnail}></img>
                <Link className='productLink' to={`/products/${product.id}`}>
                  {product.brand} {product.title}
                </Link>
                <p>Description: {product.description}</p>
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

export default Search;

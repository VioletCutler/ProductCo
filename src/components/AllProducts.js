import React from "react";
import {
  Link
} from 'react-router-dom'


const AllProducts = ({ products }) => {

  return (
    <div className='page'>
      <h2 className='title'>Popular Right Now:</h2>
      <div className="container">
        {products ? (
          products.map((product) => {
            return (
              <section key={product.id}>
                <img src={product.thumbnail}></img>
                <Link className='productLink' to={`/products/${product.id}`}>
                  {product.brand} {product.title}
                </Link>
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";

const SingleProduct = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((fetchedProduct) => {
      console.log("fetched product", fetchedProduct);
      setCurrentProduct(fetchedProduct);
    });
  }, []);

  console.log("current product", currentProduct);
  return (
    <div className="page">
      {currentProduct ? (
        <div>
          <h1>{currentProduct.title}</h1>
          <img className='singleProductImage' src={currentProduct.thumbnail}></img>
          <p>${currentProduct.price}</p>
          <p>{currentProduct.description}</p>
        </div>
      ) : (
        <h1>Loading . . .</h1>
      )}
    </div>
  );
};

export default SingleProduct;

import React, { useState, useEffect } from "react";
import { Navbar, Homepage, AllProducts, SingleProduct, Phones } from "./index";
import { Routes, Route } from "react-router-dom";
import { getAllProducts } from "../api";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <div id="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProducts products={products} />} />
        <Route path="/products/:id" element={<SingleProduct
        products={products}/>}/>
        <Route path="/products/phones" element={<Phones />} />
      </Routes>
    </div>
  );
};

export default App;

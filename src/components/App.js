import React from "react";
import { Navbar, Homepage, AllProducts, Phones } from "./index";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div id="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/phones" element={<Phones />}/>
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import {
    Navbar,
    Homepage,
    AllProducts
} from "./index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='products' element={<AllProducts/>}/>
      </Routes>
    </div>
  );
};

export default App;

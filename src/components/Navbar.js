import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='header'>
      <header>
        <i>Product Company</i>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/phones">Phones</Link>
      </nav>
    </div>
  );
};

export default Navbar;

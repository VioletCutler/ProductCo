import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='header'>
      <header>
        <i>Product Company</i>
      </header>
      <nav>
        <Link className="nav-a" to="/">Home</Link>
        <Link className="nav-a" to="/products">All Products</Link>
        <Link className="nav-a" to="/products/phones">Phones</Link>
      </nav>
    </div>
  );
};

export default Navbar;

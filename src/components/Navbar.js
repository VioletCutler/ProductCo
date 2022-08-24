import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='header'>
      <header>
        <i>Welcome To Product Co.</i>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default Navbar;

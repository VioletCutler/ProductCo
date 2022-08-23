import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>
        <i>Welcome To Product Co.</i>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default Navbar;

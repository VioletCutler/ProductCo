import React, { useState } from "react";
import {
  Link,
  useNavigate
} from 'react-router-dom'



const AllProducts = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  console.log('searchquery', searchQuery)

  function handleSubmit(event) {
    event.preventDefault()
   navigate('/products/search', {state: searchQuery})
  }

  return (
    <div className='page'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='SEARCH'onChange={(event) => setSearchQuery(event.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
      <h2 className='title'>Popular Right Now:</h2>
      <div className="container">
        {
        products ? (
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

export default AllProducts;

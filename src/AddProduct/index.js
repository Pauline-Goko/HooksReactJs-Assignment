import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the necessary action to add the new product
    // Carry the new product details in queryParams
    const queryParams = new URLSearchParams({
      name: productName,
      price: productPrice,
      // other product data
    }).toString();
    // Navigate back to the product list page with queryParams
    navigate(`/products?${queryParams}`);
  };
  return (
    <div id='addproduct'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            required
          />
        </div>
        <div>
          <br></br>
          <label htmlFor="productPrice">Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
            required
          />
        </div>
        <br></br>
        <button className='add' type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
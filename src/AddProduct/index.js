import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      name: productName,
      price: productPrice,
    }).toString();
    navigate(`/products?${queryParams}`);
  };
  return (
    <div id='addproduct'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName" className='name'>Name:</label>
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
          <label htmlFor="productPrice" className='price'>Price:</label>
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



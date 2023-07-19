import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
// import AddProduct from './AddProduct';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div>
      <Link to="/AddProduct" className="add-product-button">Add Product</Link>
      </div>

    <div id="products">
      {products.map((item) => ( 
          <div className="product" key={item.id}>
        <img className='image' src={item.thumbnail} alt={item.title} />  
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.discountPercentage}</p>
            
            <Link to={`/product/${item.id}`} key={item.id} className="product-link">  
            <button id='seemore'>See More</button>
            </Link>
          </div>
      ))}
    </div>

    {/* <AddProduct addProduct = {addProduct}/> */}
    </div>
  );
};

export default Products
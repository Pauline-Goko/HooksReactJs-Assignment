import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

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
    <div id="products">
          {/* <Link to="/products/add" className="add-product-button">Add Product</Link> */}
           <button onClick={() => navigate('/products/add')} className="addbtn2">Add Product</button>
  
      {products.map((item) => ( 
        <Link to={`/product/${item.id}`} key={item.id} className="product-link">  
          <div className="product">
            <img className='image' src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.discountPercentage}</p>
            <button id='seemore'>See More</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products
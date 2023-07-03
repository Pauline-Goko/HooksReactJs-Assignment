// import logo from './logo.svg';
// import './App.css';
// import Login  from './Login';

// function App() {
//   return (
//     <div>
//       <Login/>
      
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Products from './Products';
import AddProduct from './AddProduct';
import ProductDetailsPage from './ProductsDetails';
import Login from './Login';


const App = () => {
  return (
    <Router>
      <nav className='nav'>
        <ul>
        <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            {/* <Link to="/add-product">AddProduct</Link> */}
          </li>
         
        </ul>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      
    </Router>
  );
};

export default App;

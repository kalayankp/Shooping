
import React from 'react';
import { Link } from 'react-router-dom';

import './BasicHome.css'; 

function BasicHome() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Home Page</h1>
        <p>Welcome to our store!</p>
      </div>
      <div className="card-container">
        <Link to="/home" className="card">
          <div className="card-content">
            <h2>Home</h2>
          </div>
        </Link>
        <Link to="/cart" className="card">
          <div className="card-content">
            <h2>Cart Screen</h2>
          </div>
        </Link>
        <Link to="/product/1" className="card">
          <div className="card-content">
            <h2>Product Details</h2>
          </div>
        </Link>
        <Link to="/profile" className="card">
          <div className="card-content">
            <h2>Profile Screen</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BasicHome;

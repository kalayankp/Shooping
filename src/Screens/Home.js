// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Home Page</h1>
        <p>Welcome to our store!</p>
      </div>
      <div className="categories-container">
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)} className="category-item">
            <p>{category}</p>
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="products-container">
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-item">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

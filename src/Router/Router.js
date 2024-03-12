import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import ProductDetail from '../Screens/ProductDetail';
import MyProfile from '../Screens/MyProfile';
import BasicHome from '../Screens/BasicHome';

function App() {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<BasicHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

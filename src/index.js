import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  CartProvider } from "./context/cart-context";
import { WishlistProvider } from './context/wishlist-context';
import { BrowserRouter as Router  } from "react-router-dom";
ReactDOM.render(
  
  <React.StrictMode>
    <WishlistProvider>
    <CartProvider>
    <Router>
    <App />
    </Router>
    </CartProvider>
    </WishlistProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


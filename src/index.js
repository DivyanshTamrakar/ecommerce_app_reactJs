import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  CartProvider } from "./context/cart-context";
import { AddressProvider } from "./context/AddressContext";
import { WishlistProvider } from './context/wishlist-context';
import { BrowserRouter as Router  } from "react-router-dom";
ReactDOM.render(
  
  <React.StrictMode>
    <AddressProvider>
    <WishlistProvider>
    <CartProvider>
    <Router>
    <App />
    </Router>
    </CartProvider>
    </WishlistProvider>
    </AddressProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


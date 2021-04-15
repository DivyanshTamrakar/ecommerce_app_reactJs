import './App.css';
import { useState } from 'react';
import Header from "./Components/Header"
import Cart from "./Components/Cart";
import ProductListing from "./Components/ProductListing";
import Wishlist from "./Components/Wishlist";
import {  Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
    <div className="main-content">
     <Routes>
     <Route path="/" element={<ProductListing/>}/>
     <Route path="/carts" element={ <Cart/>}/>
     <Route path="/wishlists" element={<Wishlist/>}/>


      </Routes>
      
      

      
           
      <div>
       
      </div> 
    </div>
    </div>
  );
}

export default App;


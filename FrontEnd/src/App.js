import './App.css';
import Header from "./Components/Header"
import Cart from "./Components/Cart";
import ProductListing from "./Components/ProductListing";
import Wishlist from "./Components/Wishlist";
import {  Routes,Route } from "react-router-dom";
import Login from './Components/Login';
import Address from './Components/address';
import OrderSummary  from "./Components/OrderSummary";
import Signup from './Components/SignUp';
import { PrivateRoute } from "./Components/privateroute";



function App() {

  
  

 
  return (
    <div className="App">
    <div><Header/></div>
    <div>
     <Routes>
     <Route path="/" element={<ProductListing/>}/>
     <PrivateRoute path="/carts" element={<Cart/>}/>
     <PrivateRoute path="/wishlists" element={<Wishlist/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/address" element={<Address/>}/>
     <Route path="/ordersummary" element={<OrderSummary/>}/>
     <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <div>
    </div> 
    </div>
    </div>
  );
}

export default App;


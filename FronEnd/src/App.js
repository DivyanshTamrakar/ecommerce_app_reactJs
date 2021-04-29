import './App.css';
import Header from "./Components/Header"
import Cart from "./Components/Cart";
import ProductListing from "./Components/ProductListing";
import Wishlist from "./Components/Wishlist";
import {  Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Address from './Components/address';
import OrderSummary  from "./Components/OrderSummary";



function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
    <div className="main-content">
     <Routes>
     <Route path="/" element={<ProductListing/>}/>
     <Route path="/carts" element={<Cart/>}/>
     <Route path="/wishlists" element={<Wishlist/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/address" element={<Address/>}/>
     <Route path="/ordersummary" element={<OrderSummary/>}/>
      </Routes>
      
      

      
           
      <div>
       
      </div> 
    </div>
    </div>
  );
}

export default App;

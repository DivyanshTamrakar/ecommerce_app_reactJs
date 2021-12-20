import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Address from "./Components/address";
import OrderSummary from "./Components/OrderSummary";
import Signup from "./Components/SignUp";
import NotFoundPage from "./Components/NotFoundPage";
import AddNewAddress from "./Components/AddAddress";
import OrderHistoryPage from "./Components/OrderHistoryPage";
import { PrivateRoute } from "./Components/privateroute";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <PrivateRoute path="/carts" element={<Cart />} />
          <PrivateRoute path="/wishlists" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/address" element={<Address />} />
          <PrivateRoute path="/ordersummary" element={<OrderSummary />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnewaddress" element={<AddNewAddress />} />
          <Route path="/orderhistory" element={<OrderHistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

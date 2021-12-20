import "./App.css";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";
import Wishlist from "./Components/Wishlist";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Address from "./Components/Address/address";
import OrderSummary from "./Components/OrderHistory/OrderSummary";
import Signup from "./Components/SignUp/SignUp";
import NotFoundPage from "./Pages/NotFoundPage";
import AddNewAddress from "./Components/Address/AddAddress";
import OrderHistoryPage from "./Components/OrderHistory/OrderHistoryPage";
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

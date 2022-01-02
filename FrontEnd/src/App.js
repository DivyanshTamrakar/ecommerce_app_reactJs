import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import Login from "./Pages/Login";
import Address from "./Pages/Address";
import Signup from "./Pages/SignUp";
import NotFoundPage from "./Pages/NotFoundPage";
import AddNewAddress from "./Pages/AddNewAddress";
import OrderSummary from "./Pages/OrderSummary";
import { PrivateRoute } from "./Components/privateroute";
import { Routes, Route } from "react-router-dom";





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
          <PrivateRoute path="/wishlists" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/address" element={<Address />} />
          <PrivateRoute path="/ordersummary" element={<OrderSummary />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnewaddress" element={<AddNewAddress />} />
          <Route path="/orderhistory" element={<OrderSummary />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

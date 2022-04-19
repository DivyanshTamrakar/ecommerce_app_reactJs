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
import UserProfile from "./Pages/UserProfile";


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={

            <Home />
          } />
          <Route
            path="/carts"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/wishlists"
            element={
              <PrivateRoute>
                <WishList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/address"
            element={
              <PrivateRoute>
                <Address />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordersummary"
            element={
              <PrivateRoute>
                {" "}
                <OrderSummary />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnewaddress" element={<AddNewAddress />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orderhistory" element={<OrderSummary />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import CartDetail from "./CartDetail";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import { useCart } from "../../context/cart-context";
import { useLoader } from "../../context/LoaderContext";
import Loader from "../Loader";

const CartFrame = () => {
  const { itemInCart } = useCart();
  const { loader } = useLoader();

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="CartBox">
          {itemInCart.length ? (
            <div>
              <div className="CartHeading">Shopping Cart</div>
              <div className="Cartframe">
                <CartList />
                <CartDetail />
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
      )}
    </div>
  );
};

export default CartFrame;

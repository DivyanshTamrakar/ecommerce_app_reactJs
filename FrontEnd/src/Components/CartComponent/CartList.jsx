import React from "react";
import { useCart } from "../../context/cart-context";
import CartItemCard from "./CartItemCard";

function CartList() {
  const { itemInCart } = useCart();
  return (
    <div className="CartBoxLeft">
      {itemInCart.map((item, index) => {
        return <CartItemCard key={index} item={item} index={index} />;
      })}
    </div>
  );
}

export default CartList;

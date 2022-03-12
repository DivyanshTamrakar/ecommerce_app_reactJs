import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const [itemInCart, setIteminCart] = useState([]);
  const totalprice = itemInCart.reduce(
    (acc, value) => acc + parseInt(value.price),
    0
  );

  const getCartItems = async () => {
    try {
      const response = await getData(`/carts/${userId}`);
      setIteminCart(response.cartItem);
    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider
      value={{ getCartItems, setIteminCart, itemInCart, totalprice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

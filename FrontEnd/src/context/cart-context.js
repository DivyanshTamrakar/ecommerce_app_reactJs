import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "./LoaderContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const [itemInCart, setIteminCart] = useState([]);
  const { setloader } = useLoader();
  const totalprice = itemInCart.reduce(
    (acc, value) => acc + parseInt(value.price),
    0
  );

  const getCartItems = async () => {
    setloader(true);
    try {
      let response = await getData(`/carts/${userId}`);
      let result = response.cartItem;
      setloader(false);
      setIteminCart(result);
    } catch (e) {
      setloader(false);
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

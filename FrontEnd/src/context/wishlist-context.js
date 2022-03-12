import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
export const WishListContext = createContext();

export function WishlistProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const [ItemInWishlist, setItemInWishlist] = useState([]);

  const getWishlistItems = async () => {
    try {
      const response = await getData(`/wishlists/${userId}`);
      setItemInWishlist(response.wishlistitem);
    } catch (e) {
      console.error("Error in catch ", e);
    }
  };

  useEffect(() => {
    getWishlistItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WishListContext.Provider
      value={{ ItemInWishlist, setItemInWishlist, getWishlistItems }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishListContext);
}

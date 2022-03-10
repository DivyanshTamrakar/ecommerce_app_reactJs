import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "./LoaderContext";
export const WishListContext = createContext();

export function WishlistProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const { setloader } = useLoader();
  const [ItemInWishlist, setItemInWishlist] = useState([]);

  const getWishItems = async () => {
    setloader(true);
    try {
      const response = await getData(`/wishlists/${userId}`);
      setItemInWishlist(response.wishlistitem);
      setloader(false);
    } catch (e) {
      console.error("Error in catch ", e);
      setloader(false);
    }
  };

  useEffect(() => {
    getWishItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WishListContext.Provider
      value={{ ItemInWishlist, setItemInWishlist, getWishItems }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishListContext);
}

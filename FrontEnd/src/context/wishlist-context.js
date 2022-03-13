import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "./LoaderContext";
export const WishListContext = createContext();

export function WishlistProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const [itemInWishlist, setitemInWishlist] = useState([]);
  const {setloader} = useLoader();

  const getWishlistItems = async () => {
    try {
      const response = await getData(`/wishlists/${userId}`);
      setitemInWishlist(response.wishlistitem);
      setloader(false);
    } catch (e) {
      setloader(false);
      console.error("Error in catch ", e);

    }
  };

  useEffect(() => {
    getWishlistItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WishListContext.Provider
      value={{ itemInWishlist, setitemInWishlist, getWishlistItems }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishListContext);
}

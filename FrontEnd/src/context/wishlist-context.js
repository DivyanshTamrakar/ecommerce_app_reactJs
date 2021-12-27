import { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "./LoaderContext";
export const WishListContext = createContext();


export function WishlistProvider({ children }) {
  const userId = localStorage.getItem("userId");
  const { setloader } = useLoader();
  const [ItemInWishlist, setItemInWishlist] = useState([]);

  useEffect(() => {
    getWishItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWishItems = async () => {
    setloader(true);
    try {
      let response = await getData(`/wishlists/${userId}`);
      setloader(false);
      setItemInWishlist(response.wishlistitem);
    } catch (e) {
      console.error("Error in catch ", e);
      setloader(false);
    }
  };


  return (
    <WishListContext.Provider value={{ ItemInWishlist, setItemInWishlist ,getWishItems }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishListContext);
}

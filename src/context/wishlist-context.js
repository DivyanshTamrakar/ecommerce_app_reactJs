import { createContext, useContext, useState } from "react";
export const WishListContext = createContext();  



export function WishlistProvider({children}){
  const [WishItemInCart,setWishItemInCart] = useState([]);
    return (
        <WishListContext.Provider value={{WishItemInCart,setWishItemInCart}}>
          {children}
        </WishListContext.Provider>
      );
}

export function useWishlist(){
  return useContext(WishListContext);
   
}
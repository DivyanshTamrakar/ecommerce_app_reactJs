import { createContext, useContext, useState } from "react";
export const CartContext = createContext();  





export function CartProvider({children}){
  const [itemInCart,setIteminCart] = useState([]);




  return (
        <CartContext.Provider value={{itemInCart,setIteminCart}}>
          {children}
        </CartContext.Provider>
      );
}

export function useCart(){
  return useContext(CartContext);
   
}
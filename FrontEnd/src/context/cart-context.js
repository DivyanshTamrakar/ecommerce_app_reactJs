import { createContext, useContext, useEffect, useState } from "react";
import { getData,postData,userId } from '../FetchingApi/fetchApi'
import {useLoader} from '../context/LoaderContext';
export const CartContext = createContext();  





export function CartProvider({children}){
  const [itemInCart,setIteminCart] = useState([]);
  const { setloader } = useLoader();
  

  useEffect(()=>{
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    const getCartItems = async () =>{
       setloader(true);
      try{
        let response = await getData(`/carts/${userId}`);
        let result = response.cartItem;
        setloader(false);
        setIteminCart(result);
        
       }catch(e){
        console.error("Error in catch " , e);
        setloader(false);
      }
      
      
    }
  
    async function Removehandler(itemId) {
      const _id = itemId;
      setloader(true);
     try{
      let response = await postData(itemId,`/carts/delete/${_id}`);
      if(response.success === true){
         getCartItems();
         setloader(false);
      }
      
      }catch(e){
        console.log("Error in catch " , e);
      }
      }



  return (
        <CartContext.Provider value={{itemInCart,setIteminCart,getCartItems,Removehandler}}>
          {children}
        </CartContext.Provider>
      );
}

export function useCart(){
  return useContext(CartContext);
   
}
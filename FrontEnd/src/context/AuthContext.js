import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export const AuthContext = createContext();  



export function AuthProvider({children}){
  const [login,setLogin] = useState(false);
  
  const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
 async function LoginWithCredential(email, password){
    
    try{
        let response = await axios.post(`${url}/users/signin`,
         {
          email :email, 
          password : password,
        });
        console.log(response.data)
      if(response['data']['success'] === true){
        setLogin(true);
        // navigate(state?.from ? state.from:"/");
        toast.success(response.data.message);
           
      }
      else{
          toast.error(response.data.message);
      }
        
        
        
         
      }catch(e){
        console.log("Error in catch " , e);
      }
      

  }




    return (
        <AuthContext.Provider value={{login,LoginWithCredential}}>
          {children}
        </AuthContext.Provider>
      );
}

export function useAuth(){
  return useContext(AuthContext);
   
}
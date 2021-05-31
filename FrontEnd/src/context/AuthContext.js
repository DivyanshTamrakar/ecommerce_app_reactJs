import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {postData} from "../FetchingApi/fetchApi";
export const AuthContext = createContext();

export function AuthProvider({children}){
  const [login,setLogin] = useState(false);
  async function LoginWithCredential(email, password){
   const body = {
    email :email, 
    password : password,
  }
  try{
    let response = await postData(body, `/users/signin`);
    if(response['success'] === true){
     setLogin(true);
     localStorage.setItem('userId',response['user']['uid']);
     localStorage.setItem('name',response['user']['name']);
    // navigate(state?.from ? state.from:"/");
    toast.success(response.message);
  }
  else{
      toast.error(response.message);
  }
}catch(e){
    console.error("Error in AuhtContext " , e);
  }
  }
    return (
        <AuthContext.Provider value={{login,LoginWithCredential,setLogin}}>
          {children}
        </AuthContext.Provider>
      );
}
export function useAuth(){
  return useContext(AuthContext);
   
}
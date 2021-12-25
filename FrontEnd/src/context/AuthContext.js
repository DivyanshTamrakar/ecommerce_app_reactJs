import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../FetchingApi/fetchApi";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();
  let { state } = useLocation();
  console.log("in Context", state?.from);


  const LoginWithCredential = async (email, password) => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await postData(body, `/users/signin`);
      if (response["success"]) {
        setLogin(true);
        localStorage.setItem("userId", response["user"]["uid"]);
        localStorage.setItem("name", response["user"]["name"]);
        navigate(`${state?.from ? state.from : "/"}`, { replace: true });
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }


  }
  return (
    <AuthContext.Provider value={{ login, LoginWithCredential, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}

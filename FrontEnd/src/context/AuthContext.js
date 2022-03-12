import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../FetchingApi/fetchApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoader } from "./LoaderContext";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const { setloader } = useLoader();
  const navigate = useNavigate();
  const { state } = useLocation();

  const LoginWithCredential = async (email, password) => {
    setloader(true);
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await postData(body, `/users/signin`);
      if (response["success"]) {
        setLogin(true);
        setloader(false);
        localStorage.setItem("userId", response["user"]["uid"]);
        localStorage.setItem("name", response["user"]["name"]);
        navigate(`${state?.from ? state.from : "/"}`, { replace: true });
        window.location.reload(false);
        toast.success(response.message);
      } else {
        setloader(false);
        toast.error(response.message);
      }
    } catch (e) {
      setloader(false);
      console.error("Error in AuhtContext ", e);
    }
  };
  return (
    <AuthContext.Provider value={{ login, LoginWithCredential, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}

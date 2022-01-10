import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { login } = useAuth();

  return login ? children : <Navigate replace={true} to="/login" />
  
}

import "../Components/Login/Login.css";
import { useAuth } from "../context/AuthContext";
import Toast from "../Components/toast";
import LoginForm from "../Components/Login/LoginForm";
import UserProfile from "./UserProfile";

export default function Login() {
  const { login, setLogin } = useAuth();
  const userId = localStorage.getItem("userId");

  if (userId !== null) {
    setLogin(true);
    console.log(` local storage have user with id   : ${typeof userId}`);
  }

  return (
    <div>
      {login ? <UserProfile /> : <LoginForm />}
      <Toast />
    </div>
  );
}

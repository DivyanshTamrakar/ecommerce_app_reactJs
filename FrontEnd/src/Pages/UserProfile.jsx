import React from "react";
import "../Components/Login/Login.css";
import { useAuth } from "../context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";


function UserProfile() {
  const { setLogin } = useAuth();

  const Logouthandler = () => {
    setLogin(false);
    localStorage.removeItem("userId");
    localStorage.clear();
    window.location.reload(false);
    toast.success("Successfull Logout!");
  };
  return (
    <div className="ProfileFrame">
      <div>
        <AccountCircleIcon
          color="info"
          sx={{ color: "gray", fontSize: "5rem" }}
        />
      </div>
      <div className="Username"> {localStorage.getItem("name")}</div>
      <button className="logout cursor" onClick={Logouthandler}>
        Logout
      </button>
    </div>
  );
}

export default UserProfile;

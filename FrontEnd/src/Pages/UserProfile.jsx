import React from 'react'
import '../Components/Login/Login.css'
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function UserProfile() {


    let { setLogin } = useAuth();

    const Logouthandler = () => {
        setLogin(false);
        localStorage.removeItem("userId");
        localStorage.clear();
        toast.success("Successfull Logout!");
    }
    return (

        <div className="ProfileFrame">
            <div className="Avatar">
                <FontAwesomeIcon icon={faUser} color="white" size="5x" />
            </div>
            <div className="Username"> {localStorage.getItem("name")}</div>
            <button className="logout cursor" onClick={Logouthandler}>
                Logout
            </button>
        </div>


    )
}

export default UserProfile

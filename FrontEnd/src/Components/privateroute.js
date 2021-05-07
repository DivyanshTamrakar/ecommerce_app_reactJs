import { useAuth } from "../context/AuthContext";
import {  Route, Navigate} from "react-router-dom";


export function PrivateRoute({path, ...props}){
    let {login} = useAuth();
    const isuserLogin = localStorage.getItem('userId');
    console.log("via login");
    console.log({path});


    return isuserLogin !==null || login ? <Route path={path} {...props}/>:<Navigate state={{from:path}}   replace to='/login'/>;

  }
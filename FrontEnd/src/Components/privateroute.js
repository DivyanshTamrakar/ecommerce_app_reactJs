import { useAuth } from "../context/AuthContext";
import {  Route, Navigate} from "react-router-dom";
import { userId } from "../FetchingApi/fetchApi";


export function PrivateRoute({path, ...props}){
    let {login} = useAuth();
    console.log("via login");
    console.log({path});


    return userId !==null || login ? <Route path={path} {...props}/>:<Navigate state={{from:path}}   replace to='/login'/>;

  }
import { useAuth } from "../context/AuthContext";
import {  Route, Navigate} from "react-router-dom";


export function PrivateRoute({path, ...props}){
    let {login} = useAuth();
    console.log({path});


    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}}   replace to='/login'/>;

  }
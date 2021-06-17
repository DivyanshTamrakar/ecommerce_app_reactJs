import { useAuth } from "../context/AuthContext";
import {  Route, Navigate} from "react-router-dom";
import { userId } from "../FetchingApi/fetchApi";


export function PrivateRoute({path, ...props}){
    let {login} = useAuth();
    console.log("via private router login");
    console.log({path});
    console.log(userId);


    return login ? <Route path={path} {...props}/>:<Navigate state={{from:path}} replace={true} to={'/login'}/>;

  }
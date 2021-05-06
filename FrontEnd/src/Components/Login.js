import {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Login(){

   let {login,LoginWithCredential} = useAuth();
   let email = "";
   let password = "";
   let name = "";
   const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
   const { state } = useLocation();
   const  navigate  = useNavigate();
  
  

  

  function Handler(event){
        event.preventDefault();
       if(name === "" && email === "" && password === ""){
            toast.dark("Fill every Field!");    
        }else{
           
           LoginWithCredential(email,password);
          //  navigate(state?.from ? state.from:"/");

           }

        
  }

function  Logouthandler(){
  toast("User will be log out!")

}
  

 
   return (
<div>
     
     
     <form className="loginForm">
          <div className="form">
       
        
          <label>
              <b>email</b>
              <input className="input-form" type="email" placeholder="Enter email" onChange={(text)=>{
                  email = text.target.value;
              }} />
          </label>

          </div>
          <div className="form">
          <label>
              <b>Password</b>
              <input className="input-form" type="password" placeholder="Enter password" onChange={(text)=>{
                  password = text.target.value;
              }} />
          </label>

          </div>

       <button className="inputbutton"  onClick={Handler
              }  >Login</button>


<button className="inputbutton"  onClick={Logouthandler}  >{login?"Logout":"Login"}</button>









            <Link to='/signup'>
            <div>
                  <b>Having Trouble Login ? Register here</b>
              </div>
            </Link>


      </form>



<div>
    
<ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</div>

</div>
    





    
  );
            


}





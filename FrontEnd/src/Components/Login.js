import {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){


   let email = "";
   let password = "";
   let name = "";
   let mobile="";
   const url = "https://connect-with-mongooosevalidator-ke-sath.divyanshtamraka.repl.co";

  

  const Check = async () =>{
    try{
      let response = await axios.post(`${url}/users/signup`,{
         email :email, 
         password : password,
         name : name,
         mobile:mobile
      });
      const resultData = response;
      
      
       
    }catch(e){
      console.log("Error in catch " , e);
    }
    
    
  }

  function Handler(event){
        event.preventDefault();
       

        if(name === "" && email === "" && password === "" && mobile===""){
            toast.dark("Fill every Field!");    
        }else{
           
            Check();

           }

        
  }



   return (



<div className="loginBox">

      <form className="loginForm">


          <div>
          <label>
              <b>Name</b>
              <input className="input" type="text" placeholder="Enter Name" onChange={(text)=>{
                  name = text.target.value;
              }} />
          </label>

          </div>
          <div>
       
        
          <label>
              <b>email</b>
              <input className="input" type="email" placeholder="Enter email" onChange={(text)=>{
                  email = text.target.value;
              }} />
          </label>

          </div>
          <div>
          <label>
              <b>Password</b>
              <input className="input" type="password" placeholder="Enter password" onChange={(text)=>{
                  password = text.target.value;
              }} />
          </label>

          </div>

          <div>
              
          <label>
              <b>Mobile No</b>
              <input className="input"  type="number" placeholder="Enter Mobile" maxLength="10" onChange={(text)=>{
                  mobile = text.target.value;
              }} />
          </label>
          </div>
          <button onClick={Handler
              }  >Register</button>


      </form>
<div>
    
<ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
hideProgressBar
/>
</div>

</div>
    





    
  );
            


}





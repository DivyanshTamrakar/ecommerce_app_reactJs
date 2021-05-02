import {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup(){
   let email = "";
   let password = "";
   let name = "";
   let mobile="";
   const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
  const Check = async () =>{
    try{
      let response = await axios.post(`${url}/users/signup`,
       {
        email :email, 
        password : password,
        name : name,
        mobile:mobile
      });
    //   console.log(response.data)
    if(response['data']['success'] === true){
        toast.success(response.data.message);
    }
    else{
        toast.error(response.data.message);
    }
      
      
      
       
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



<div>

      <form className="loginForm">


          <div className="form">
          <label>
              <b>Name</b>
              <input className="input-form" type="text" placeholder="Enter Name" onChange={(text)=>{
                  name = text.target.value;
              }} />
          </label>

          </div>  
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

          <div className="form">
              
          <label>
              <b>Mobile No</b>
              <input className="input-form"  type="number" placeholder="Enter Mobile" maxLength="10" onChange={(text)=>{
                  mobile = text.target.value;
              }} />
          </label>
          </div>
          <button className="inputbutton"  onClick={Handler
              }  >Register</button>


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





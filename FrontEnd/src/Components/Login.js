import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Login(){

   let {login,LoginWithCredential,setLogin} = useAuth();
   let email = "";
   let password = "";
   let name = "";
   const userId = localStorage.getItem('userId');
   
   

   if(userId !== null)
   {
     setLogin(true);
     console.log(` local storage have user with id   : ${typeof(userId)}`);
   }
 

   function Handler(event){
        event.preventDefault();
       if(name === "" && email === "" && password === ""){
            toast.dark("Fill every Field!");    
        }else{
          // console.log(`In Login page ${state.from}`);
           LoginWithCredential(email,password);
           
                   }

        
  }

function  Logouthandler(){
  setLogin(false);
  localStorage.removeItem('userId');
  localStorage.clear();
  toast.success("Successfull Logout!")

}
   
   return (
<div style={{marginTop:"1rem"}}>
    { login === true ? 
    <div >
         <button className="inputbutton" onClick={Logouthandler}>Logout</button>
         
         </div>
       :   <form className="loginForm">
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
  
              <Link to='/signup'>
              <div>
                    <b>Having Trouble Login ? Register here</b>
                </div>
              </Link>
  
  
        </form>
  
  
  
    }
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





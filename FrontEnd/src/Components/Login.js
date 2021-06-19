import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useState } from 'react';

export const HideLinkUnderline = { textDecoration: 'none' ,color:'black'};
export const GoToRegisterPageLink ={display:'inline',fontWeight:'500',textAlign:'right',cursor:'pointer'}
export default function Login(){

   let {login,LoginWithCredential,setLogin} = useAuth();
   const [UserDetails,setUserDetails] = useState({
     email:'',
     password:''
   })
   const userId = localStorage.getItem('userId');

   if(userId !== null)
   {
     setLogin(true);
     console.log(` local storage have user with id   : ${typeof(userId)}`);
   }

   function  Logouthandler(){
  setLogin(false);
  localStorage.removeItem('userId');
  localStorage.clear();
  toast.success("Successfull Logout!")

  }


  function InputChangehandler(e){
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({...UserDetails,[name]:value})
  }
  
  function SubmitHandler(e){
    e.preventDefault()
    let newRecord = {...UserDetails};
    if((newRecord.email === '') && (newRecord.password === ''))
    {
      console.log("fill all fileds");
    } 
    else{
      console.log(newRecord);
      LoginWithCredential(newRecord.email,newRecord.password);
    }


  }


   return (
<div style={{marginTop:"1rem"}}>
    { login === true 
    ? 
    <div > <button className="inputbutton" onClick={Logouthandler}>Logout</button> </div>
       :  <form action="" onSubmit={SubmitHandler}>
              <div className="form-frame">
                <span>Sign In</span>

              <div>
               <label>Email address</label>
               <input 
                  type="text" 
                  value={UserDetails.email}
                  onChange={InputChangehandler}
                  name="email"
                  autoComplete="off"
                 placeholder="Enter email"/>
              </div>    
  
              <div>
                  <label>Password</label>
                  <input 
                    type="password" 
                    value={UserDetails.password}
                    onChange={InputChangehandler}
                    name="password" 
                    autoComplete="off"
                    placeholder="Enter password"/>
              </div>    

              <div>
                 <section>
                     <input type="checkbox" name="remember"/>
                     <label style={{fontWeight:'700'}}> Remember me</label>
                 </section>
              </div>
       
              <div> <button type="submit">Login</button> </div>

              <div  style={GoToRegisterPageLink}> 
              <Link to='/signup' style={HideLinkUnderline}>
              Not having account ?<span style={{color:'#3498db',display:'inline'}}> SignUp</span>
              </Link>
              </div>
       
       
        </div>
    
       </form>
       
       
       }













<div>
<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
</div>

</div>
    





    
  );
            


}





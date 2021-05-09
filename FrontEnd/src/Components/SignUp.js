import { postData } from "../FetchingApi/fetchApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup(){
   let email = "";
   let password = "";
   let name = "";
   let mobile="";
   
  const Check = async () =>{
      const body = {
        email :email, 
        password : password,
        name : name,
        mobile:mobile
      }
    try{
      let response = await postData(body,`/users/signup`);
      console.log(response)
    if(response['success'] === true){
        toast.success(response.message);
    }
    else{
        toast.error(response.message);
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





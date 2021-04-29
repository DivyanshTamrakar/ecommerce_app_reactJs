export default function Login(){
    return (
  <div style={{width:"100%",textAlign:'center'}}>

      <form className="loginForm">
          <div>
          <label>
              <b>Username</b>
              <input type="text" placeholder="Enter username"  />
          </label>
          </div>
          <div>
          <label>
              <b>Password</b>
              <input type="password" placeholder="Enter password"  />
          </label>
          </div>
          <button >Login</button>


      </form>

</div>
    );
            


}





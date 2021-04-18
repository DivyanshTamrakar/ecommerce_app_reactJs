import { useState } from "react";
import { useAddress } from "../context/AddressContext";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function Address(){
    let {address,setAddress}  = useAddress();
    const [addclick,setclick]  =useState(false);
    
    let selectAddress = 0;
    const [radiovalue,setradiovalue] = useState(selectAddress);
    let name, mobile, locality, fulladd, state, pincode, city;


    function SubmitHandler(e){
        e.preventDefault();
        setAddress([
            ...address,
            {id:uuidv4(),
              name:name,
             mobile:mobile,
             locality:locality,
              fulladd :fulladd,
               state:state, 
                pincode:pincode,
                 city:city}
        ])
        setclick(false);
     

    }

    function radiohandler(e){
      setradiovalue(
        selectAddress = e.target.value
      )
      console.log(` target value ${e.target.value}`)
      console.log(` Select Address ${selectAddress}`)
      

    }

   return (
    <div>
<h1 style={{padding:"0.3rem",backgroundColor:"navy",margin:"1rem",color:"white"}}>Choose Delivery Address</h1>
{/* // show list of address// */}

{
    <ul style={{ listStyleType: "none" }}>
        {address.map((address,index) => (
          <>
                    
               
               
          {/* radio  button */}
          {/* <span>{index}</span> */}
            <div className="addressBox">
              
              <label>
              <input onClick={radiohandler} type="radio" name="add" value={address.id}/>
              </label>
               
              
              
              
              <li
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                {address.name}
              </li>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li style={{ marginTop: "0.3rem", fontSize: "18px" }}>
                  {address.fulladd}
                </li>
                <li style={{ marginTop: "0.3rem", fontWeight: "bolder" }}>
                  Mob: {address.mobile}
                </li>
              </div>
              <div style={{ display: "flex" }}>
                <li style={{ marginTop: "0.3rem", fontSize: "18px" }}>
                  {address.state}
                </li>
                <li style={{ marginTop: "0.3rem", fontWeight: "bold" }}>
                  ,{address.country}
                </li>
              </div>
              <li style={{ marginTop: "0.3rem", fontWeight: "bold" }}>
                {address.pincode}
              </li>

{/* Edit and delete */}

              <li style={{ marginTop: "0.3rem", fontWeight: "bold" }}>
                <button className="primarybtn" style={{marginRight:'0.5rem'}}>Delete Address</button>
                <button className="primarybtn"><i class="fa fa-edit"></i>Edit Address</button>
              </li>

{/* deliver to address  */}

              { radiovalue === address.id ?
              <li >
                <Link to="/ordersummary">
                <button style={{ marginTop: "0.3rem", fontWeight: "bold",width:"100%", backgroundColor:"green",padding:"0.5rem",color:"white" }}
                > Deliver to this address</button>
                   </Link>
              </li>:<div></div>
              }




            </div>
          </>
        ))}
      </ul>
    }



{/* // address form  */}
{
    addclick === true?
    <div className="form">
<form>
<label>
    Name :
<input onChange={(e)=>{
     name = e.target.value;
}}   type="text" placeholder="Enter name" />
</label>
<label for="phone">Mobile No :
 <input onChange={(e)=>{
     mobile = e.target.value;
 }} type="number"  placeholder="Enter mobile no" />
 </label>
 <label for="pincode">Pincode :
 <input onChange={(e)=>{
     pincode = e.target.value;
 }} type="number"  placeholder="Enter pincode" />
 </label>


 <label for="locality">Locality :
 <input onChange={(e)=>{
     locality = e.target.value;
 }} type="text"  placeholder="Enter Locality" />
 </label>
 <label for="address">Address :
 <input onChange={(e)=>{
     fulladd = e.target.value;
 }} type="text"  placeholder="Enter Address" />
 </label>
 <label for="city">City :
 <input onChange={(e)=>{
     city = e.target.value;
 }} type="text"  placeholder="Enter City" />
 </label>
 <label for="state">State:
 <input onChange={(e)=>{
     state = e.target.value;
 }} type="text"  placeholder="Enter State" />
 </label>

 <button onClick={SubmitHandler}>Submit</button>
 

</form>
 </div>

    :<div></div> 
}

 <button style={{padding:"0.5rem",backgroundColor:"green",color:"white",border:"none",}}
  onClick={()=>setclick((addclick)=>!addclick)}>
     
     {addclick === false ?  "Add new Address" : "Close Address form"}
     
     </button>
 
 
 

        </div>
    );
}

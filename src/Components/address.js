import { useState } from "react";

export default function Address(){
    let [address,setaddress] = useState([]);
    const [addclick,setclick]  =useState(false);
    let name, mobile, locality, fulladd, state, pincode, city;


    function SubmitHandler(e){
        e.preventDefault();
        // console.log(name);
        // console.log(mobile);
        // console.log(locality);
        // console.log(fulladd);
        // console.log(state);
        // console.log(pincode);
        // console.log(city);

        setaddress([
            ...address,
            {name:name,
             mobile:mobile,
             locality:locality,
              fulladd :fulladd,
               state:state, 
                pincode:pincode,
                 city:city}
        ])
        setclick(false);
        console.log(address);

    }

   return (
    <div>
<h1 style={{padding:"0.3rem",backgroundColor:"navy",margin:"1rem",color:"white"}}>Choose Delivery Address</h1>
{/* // show list of address// */}

{
    <ul style={{ listStyleType: "none" }}>
        {address.map((address) => (
          <>
            <div className="addressBox">
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

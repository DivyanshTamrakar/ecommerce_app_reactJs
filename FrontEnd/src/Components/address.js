import { useState,useEffect } from "react";
import { getData,postData } from "../FetchingApi/fetchApi";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Toast } from "../Toast/toast";

const Deliverbtn = { 
  marginTop: "0.3rem",
  fontWeight: "bold",
  width:"100%",
  backgroundColor:"green",
  padding:"0.5rem",
  color:"white" }
const addressAdd = {
  width:'100%',
  margin:'1rem',
  padding:"0.8rem",
  backgroundColor:"orange",
  fontWeight:'bolder',
  color:"white",border:"none",
  cursor:'pointer'
}
const ChooseHeading = {padding:"0.3rem",backgroundColor:"navy",margin:"1rem",color:"white"}
const address_state = 
{ marginTop: "0.3rem", fontSize: "18px" };
 
const list_item_name    = { fontSize: "25px", fontWeight: "bolder" };
const list_item_state = { display: "flex", justifyContent: "space-between" };

const pin_mobile  = {
  marginTop:'0.3rem',
  fontWeight:'bold'
}
const delete_btn= {marginRight:'0.5rem'}


export default function Address(){
    const  [address,setAddress]  = useState([]);
    const [addclick,setclick]  = useState(false);
    const userId = localStorage.getItem('userId');
    let selectAddress = 0;
    const [radiovalue,setradiovalue] = useState(selectAddress);
    let name, mobile, fulladd, state, pincode, city;

    
    useEffect( ()=>{
      getAddressData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getAddressData(){
      let response = await getData(`/address/${userId}`);
      setAddress(response.address);
    }

    


    async function SubmitHandler(e){
       e.preventDefault();
        const body =  {
        name : name,
        customerId: userId,
        address: fulladd,
        mobile: mobile,
        state:state,
        pincode:pincode,
        city:city
           };
                     
           
      let response = await postData(body,'/address');
      if(response.success === true)
      {
        toast.success(response.message);
        getAddressData();
      }
        setclick(false);
    }

    function radiohandler(e){
      setradiovalue(
        selectAddress = e.target.value
      )
      

    }

   return (
    <div>
      <div>
    <h1 style={ChooseHeading}>Choose Delivery Address</h1>
     {/* // show list of address// */}

    <div> { 
       <ul style={{ listStyleType: "none" }}>
          {address.map((address) => (
            <>
            {/* radio  button */}
            {/* <span>{index}</span> */}
              <div className="addressBox">
                <label>
                <input onClick={radiohandler} type="radio" name="add" value={address._id}/>
                </label>
                <li style={list_item_name}> {address.name} </li>
                <div style={list_item_state}>
                   <li style={address_state}>{address.address}</li>
                   <li style={pin_mobile}>Mob: {address.mobile} </li>
                </div>
                <div style={{ display: "flex" }}>
                   <li style={address_state}>{address.state}</li>
                </div>
                <li style={{ marginTop: "0.3rem", fontWeight: "bolder" }}>{address.pincode} </li>
  
                        {/* Edit and delete */}
  
                <li style={{ marginTop: "0.3rem", fontWeight: "bold" }}>
                  <button className="primarybtn" style={delete_btn}>Delete Address</button>
                  <button className="primarybtn"><i class="fa fa-edit"></i>Edit Address</button>
                </li>
  
  {/* deliver to address  */}
  
                { radiovalue === address._id ?
                <li >
                  <Link to="/ordersummary">
                  <button style={Deliverbtn}
                  > Deliver to this address</button>
                     </Link>
                </li>:<div></div>
                }
  
  
  
  
              </div>
            </>
          ))}
        </ul>
      }</div>
  
  
  
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

 <button style={addressAdd}
  onClick={()=>setclick((addclick)=>!addclick)}>
     
     {addclick === false ?  "Add new Address" : "Close Address form"}
     
     </button>
 
 
 

        </div>
    
        {Toast()}
    </div>
    );
}

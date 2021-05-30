import { useState ,useEffect} from "react";
import {getData } from "../FetchingApi/fetchApi";


function OrderSummary(){

const [cartData,setCartdata] = useState([]);
let totalprice = 0;
const userId = localStorage.getItem('userId');

  useEffect(()=>{
    getCartItems();
    // eslint-disable-next-line
  },[]);

  const getCartItems = async () =>{
    try{
      let response = await getData(`/carts/${userId}`);
      setCartdata(response.cartItem);
    }catch(e){
      console.log("Error in catch " , e);
    }
    
    
  }
  
  function placeHolderhandler() {
    alert(" Your order successfull placed !");
      
  }
  
  
  function Removehandler(e) {
    console.log(e);
  }





    return(
      <div>
        <div><h1>Order Summary</h1></div>  
        <div className="productbox">
      {cartData.map(function(item){

        totalprice = totalprice + parseInt(item.price);
        
        return (
          <div key={item._id} className="OrderproductItem">
            <img className="corner-radius" src={item.image} alt="item" height="200px" width="212px"/>
            
            <div className="namelike">
              <span style={{fontWeight:"bolder"}}>{item.name}</span>
              <span
              //  onClick={()=>setWishItemInCart((item)=>item+1)}
              ><i class="fa fa-heart"></i></span>
            </div>
            <span>{item.productdescription}</span>
            <span> Rs.{item.price}</span>
         <div className="button-group">
              
         <button onClick={()=>Removehandler(item.id)}  className="btn">Remove from Cart</button>
         </div>


        
          </div>
        );
      })}

      </div>

     {

cartData.length!==0
?
<div>
<h2 className="totalamount">{`Total Cart Value = ${totalprice}`}</h2>

  
<button onClick={placeHolderhandler} className="placeOrder">Place Your Order</button>  
</div>
:<div></div>

     }





      </div>
    );
    }

   
    export default OrderSummary;    
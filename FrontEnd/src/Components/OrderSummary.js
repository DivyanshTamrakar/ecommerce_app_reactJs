import {useEffect, useState} from "react";
import { useLoader } from "../context/LoaderContext";
import {getData,postData,userId} from '../FetchingApi/fetchApi'


function OrderSummary(){

  const [items,setItems] = useState([]);
  let {loader,setloader} = useLoader();

  let totalprice = 0;

  useEffect(()=>{
    getCartItems();
    // eslint-disable-next-line
  },[]);
  const getCartItems = async () =>{
    setloader(true);
   try{
     let response = await getData(`/carts/${userId}`);
     let result = response.cartItem;
     setloader(false);
     setItems(result);
     
    }catch(e){
     setloader(false);
   }
   
   
 }

  function placeHolderhandler() {
    alert(" Your order successfull placed !");
      
  }
  
  async function Removehandler(itemId) {
    setloader(true);
    const _id = itemId;
   try{
    let response = await postData(itemId,`/carts/delete/${_id}`);
    if(response.success === true){
      setloader(false);
       getCartItems();
    }
    
    }catch(e){
      console.log("Error in catch " , e);
      setloader(false);
    }
    }
  



    return(
      <div>
        {
          loader?<div className="loader"></div>:   <div>
          <div><h1>Order Summary</h1></div>  
          <div className="productbox">
        {
        
        items.map(function(item){
  
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
                
           <button onClick={()=>Removehandler(item._id)}  className="btn">Remove from Cart</button>
           </div>
  
  
          
            </div>
          );
        })}
  
        </div>
  
       {
  
  items.length!==0 ?
  <div><h2 className="totalamount">{`Total Cart Value = ${totalprice}`}</h2>  
  <button onClick={placeHolderhandler} className="placeOrder">Place Your Order</button>  
  </div>
  :<div></div>
  
       }
  
  
  
  
  
        </div>
      
        }

      </div>
   );
    }

   
    export default OrderSummary;    
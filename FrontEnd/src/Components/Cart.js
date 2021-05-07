import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext, useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import axios from 'axios';

function Cart(){
  const {itemInCart,setIteminCart} = useCart();
  const {setWishItemInCart} = useWishlist();
  const [cartData,setCartdata] = useState([]);
  let totalprice = 0;
  const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
  const userId  = localStorage.getItem('userId'); 


  useEffect(()=>{
    getCartItems();
  },[]);

  const getCartItems = async () =>{
    try{
      let response = await axios.get(`${url}/carts/${userId}`);
      const resultData = response.data.cartItem;
      console.log(resultData);
       setCartdata(resultData);
      
    }catch(e){
      console.log("Error in catch " , e);
    }
    
    
  }

  
  
  
  
  function Removehandler(e) {
    console.log(e);
    const new_arr = itemInCart.filter(function (item, index) {
      return item.id !== e;
      // console.log(item.item.id);

    });
    console.log(` new array : ${new_arr}`);
    setIteminCart(new_arr);
  }





    return(
      cartData.length!==0
    ?
    
    <div>
        <div><h1>Cart</h1></div>  
        <div className="productbox">
      {
      
      
       cartData.map(function(item){

        totalprice = totalprice + parseInt(item.price);
        
        return (
          <div key={item.id} className="productItem">
            <img className="corner-radius" src={item.image} height="200px" width="212px"/>
            
            <div className="namelike">
              <span style={{fontWeight:"bolder"}}>{item.name}</span>
              <span onClick={()=>setWishItemInCart((item)=>item+1)}><i class="fa fa-heart"></i></span>
            </div>
            <span>{item.description}</span>
            <span> Rs.{item.price}</span>
         <div className="button-group">
              
         <button onClick={()=>Removehandler(item.id)}  className="btn">Remove from Cart</button>
         </div>
          </div>
        );
      })
      
      }

      </div>


{
 cartData.length !== 0 ? 

<Link to="/address"> <button className="checkoutbtn"> Proceed to CheckOut </button></Link>
:
<div></div>
}



      </div>
    
    :
    <div style={{marginTop:"10rem"}}>
<span style={{fontSize:"3rem",fontWeight:"bolder"}}>
Your cart is Empty 
</span>

    </div>
    
    
    );
    }

   
    export default Cart;    
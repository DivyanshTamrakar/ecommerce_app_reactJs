import { useWishlist  } from "../context/wishlist-context";
import { useLoader  } from "../context/LoaderContext";
import axios from 'axios';
import {useState,useEffect  } from "react";

function Wishlist(){
  const {WishItemInCart,setWishItemInCart} = useWishlist();
  const [wishData,setwishdata] = useState([]);
  const {loader,setloader} = useLoader();
  const url = "https://ecommerceappbackend.divyanshtamraka.repl.co";
  const userId  = localStorage.getItem('userId'); 


  useEffect(()=>{
    getWishItems();
  },[]);

  const getWishItems = async () =>{
    setloader(true)
    try{
      let response = await axios.get(`${url}/wishlists/${userId}`);
      const resultData = response.data.wishlistitem;
      setloader(false);
      setwishdata(resultData)
      
    }catch(e){
      console.log("Error in catch " , e);
    }
  }

  

    return(

    loader?<div className="loader"></div>:  wishData.length!==0 ?
    <div>

      <div><h1>Your WishliSt {WishItemInCart.length}</h1></div>  
      <div className="productbox">
    {wishData.map(function(item){
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
            
       <button className="btn">Move to Cart</button>
       </div>
        </div>
      );
    })}
    </div>
    </div>
  
  :
  <div style={{marginTop:"10rem"}}>
<span style={{fontSize:"3rem",fontWeight:"bolder"}}>
Your Wishlist  is Empty 
</span>

  </div>
    );



    }
export default Wishlist;    

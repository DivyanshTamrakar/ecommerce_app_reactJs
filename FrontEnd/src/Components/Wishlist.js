import { useWishlist  } from "../context/wishlist-context";
import { useLoader  } from "../context/LoaderContext";

import {useState,useEffect  } from "react";
import {getData,userId } from "../FetchingApi/fetchApi";

function Wishlist(){
  const {WishItemInCart,setWishItemInCart} = useWishlist();
  const [wishData,setwishdata] = useState([]);
  const {loader,setloader} = useLoader();


  useEffect(()=>{
    getWishItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getWishItems = async () =>{
    setloader(true)
    try{
      let response = await getData(`/wishlists/${userId}`);
      setloader(false);
      setwishdata(response.wishlistitem)
      
    }catch(e){
      console.log("Error in catch " , e);
      setloader(false);
    }
  }

  

    return(

    loader?<div className="loader"></div>:  
    wishData.length!==0 ?
    <div>

      <div><h1>Your WishliSt {WishItemInCart.length}</h1></div>  
      <div className="productbox">
    {wishData.map(function(item){
      return (
        <div key={item.id} className="productItem">
          <img className="corner-radius" src={item.image} alt="itemimage"height="200px" width="212px"/>
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

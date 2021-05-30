import { getData,postData,userId} from '../FetchingApi/fetchApi'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { useLoader } from "../context/LoaderContext";

function Cart(){
  const {setWishItemInCart} = useWishlist();
  const [cartData,setCartdata] = useState([]);
  const {loader,setloader} = useLoader();
  let totalprice = 0;

  

    useEffect(()=>{
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getCartItems = async () =>{
    setloader(true);
    try{
      let response = await getData(`/carts/${userId}`);
      setloader(false);
      setCartdata(response.cartItem);
      console.log(response);

      
    }catch(e){
      console.log("Error in catch " , e);
    }
    
    
  }

  
  
  
  
  async function Removehandler(itemId) {
    const _id = itemId;
   setloader(true);
try{
      let response = await postData(itemId,`/carts/delete/${_id}`);
      if(response.success === true){
              getCartItems();
      }
     
    }catch(e){
      console.log("Error in catch " , e);
    }
  }





    return(
      loader?<div className='loader'></div>:
      cartData.length!==0
    ?
    
    <div>
       
        <div><h1>Cart</h1></div>  
        <div className="productbox">
      {
      
      
       cartData.map(function(item){

        totalprice = totalprice + parseInt(item.price);
        return (
          <div key={item._id} className="productItem">
            <img className="corner-radius" src={item.image} alt="Item" height="200px" width="212px"/>
            
            <div className="namelike">
              <span style={{fontWeight:"bolder"}}>{item.name}</span>
              <span onClick={()=>setWishItemInCart((item)=>item+1)}><i class="fa fa-heart"></i></span>
            </div>
            <span>{item.description}</span>
            <span> Rs.{item.price}</span>
         <div className="button-group">
              
         <button onClick={()=>Removehandler(item._id)}  className="btn">Remove from Cart</button>
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
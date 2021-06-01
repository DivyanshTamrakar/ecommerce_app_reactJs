import {useEffect} from "react";
import { useCart } from '../context/cart-context';


function OrderSummary(){


const {itemInCart,getCartItems,Removehandler} = useCart();
let totalprice = 0;

  useEffect(()=>{
    getCartItems();
    // eslint-disable-next-line
  },[]);

  function placeHolderhandler() {
    alert(" Your order successfull placed !");
      
  }
  
  



    return(
      <div>
        <div><h1>Order Summary</h1></div>  
        <div className="productbox">
      {itemInCart.map(function(item){

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

itemInCart.length!==0
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
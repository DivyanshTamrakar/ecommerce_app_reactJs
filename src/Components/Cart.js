import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

function Cart(){
  const {itemInCart,setIteminCart} = useCart();
  
  const {setWishItemInCart} = useWishlist();
  let totalprice = 0;
  
  
  
  
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
      <div>
        <div><h1>Cart</h1></div>  
        <div className="productbox">
      {itemInCart.map(function(item){

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
      })}

      </div>


{
itemInCart.length !== 0 ? 

<Link to="/address"> <button className="checkoutbtn"> Proceed to CheckOut </button></Link>
:
<div></div>
}



      </div>
    );
    }

   
    export default Cart;    
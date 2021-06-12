import { useWishlist } from "../context/wishlist-context";
import { Link} from "react-router-dom";



function Header(){
  const {WishItemInCart} = useWishlist();

    
    return (
      <div className="navigation">

      <Link to="/"><h2 className="cursor" style={{color:"white",textDecoration:"none"}}>E-Commerce app</h2></Link>
      
      <div className="icons">
      <span style={{fontSize:"2rem"}}><a href="/" class="notification">

      <Link to="/wishlists"><span><i class="fa fa-heart" style={{color:"white"}}></i></span></Link>

      <span class="badge">{WishItemInCart.length}</span>

      </a>
      </span>

      <div className="Spacer"></div>

      <span  style={{fontSize:"2rem"}}><a href="/" class="notification">

      <Link to="/carts"><span><i class="fa fa-shopping-cart" style={{color:"white"}}></i></span></Link>

      <span class="badge">{0}</span>

     

      </a></span>

      <div className="Spacer"></div>

      <span  style={{fontSize:"2rem"}}><a href="/" class="notification">

      <Link to="/login"><span><i class="fa fa-user" style={{color:"white"}}></i></span></Link>

      </a></span>



      </div>
    
    
    
      </div>
    );
  
  }

  export default Header;
  
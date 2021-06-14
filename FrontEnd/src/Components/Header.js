import { useWishlist } from "../context/wishlist-context";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart ,faShoppingCart,faUser,faStore} from '@fortawesome/free-solid-svg-icons'





export default function Header(){
  const {WishItemInCart} = useWishlist();

    
    return (
      <div className="navigation">
      <Link to="/"><FontAwesomeIcon icon={faStore}  color="white"  size="2x"/></Link>
      <div className="icons">
      <span  class="notification">
      <Link to="/wishlists"><FontAwesomeIcon icon={faHeart}  color="white" /></Link>
      <span class="badge">{WishItemInCart.length}</span>
      </span>
      <span  class="notification">
      <Link to="/carts"><FontAwesomeIcon icon={faShoppingCart}  color="white" /></Link>
      <span class="badge">{0}</span>
      </span>
      <span  class="notification">
      <Link to="/login"><FontAwesomeIcon icon={faUser}  color="white" /></Link>
      </span>
      </div>
      </div>
    );
  
  }
  
  
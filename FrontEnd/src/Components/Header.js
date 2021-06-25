import { useWishlist } from "../context/wishlist-context";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHeart ,faShoppingCart,faUser,faTimes} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


export default function Header(){
  
  const {WishItemInCart} = useWishlist();

  const [Drawer,setDrawer] = useState(false);

    return (
      <>
      <div className="navigation">
      {/* <Link to="/"> */}
      <FontAwesomeIcon icon={faBars}  color="white" size="2x" onClick={()=>setDrawer(!Drawer)} style={{cursor:'pointer'}}/>
      {/* </Link> */}
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

      {/* // side bar  */}

     
      <div id={ Drawer ? 'mySidenav-open':'mySidenav-close'} className="sidenav">

      <div onClick={()=>setDrawer(!Drawer)} className="closebtn">&times;</div>
      <span>About</span>
      <span>Services</span>
      <span>Clients</span>
      <span>Contact</span>
      </div>
        </>
    );
  
  }
  
  
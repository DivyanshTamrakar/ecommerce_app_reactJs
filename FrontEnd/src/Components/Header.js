import { useWishlist } from "../context/wishlist-context";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHeart ,faShoppingCart,faStore,faUser} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


export default function Header(){
  
  const {WishItemInCart} = useWishlist();
  const name = localStorage.getItem('name');

  const [Drawer,setDrawer] = useState(false);

    return (
      <>
      <div className="navigation">
      <FontAwesomeIcon icon={faBars}  color="white" size="lg" onClick={()=>setDrawer(!Drawer)} style={{cursor:'pointer',marginTop:'0.5rem'}}/>
      <Link to="/" style={{textDecoration:'none',fontWeight:'800',fontSize:'35px',color:'white'}}>  Ecommerce Store </Link>
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
      <div type='header-profile'>
      <span><FontAwesomeIcon  icon={faUser}/></span>
      <span>Hello, {name}</span>
      </div>      
      <Link to='/login' style={{textDecoration:'none'}}><span>Account</span></Link>
      <span>Orders</span>
      <Link to='/address' style={{textDecoration:'none'}}><span>Addresses</span></Link>
      </div>
        </>
    );
  
  }
  
  
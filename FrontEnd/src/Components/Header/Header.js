import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from "react";
import { useCart } from "../../context/cart-context";


const IconDesign = { color: 'white', fontSize: '2rem' };
const BadgeDesign = { fontWeight: "600", color: "black400",padding:'5px' };

export default function Header() {
  const { WishItemInCart } = useWishlist();
  const { itemInCart } = useCart()

  const [Drawer, setDrawer] = useState(false);

  return (
    <>
      <div className="navigation">
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size="lg"
          onClick={() => setDrawer(!Drawer)}
          style={{ cursor: "pointer", marginTop: "0.5rem" }}
        />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "800",
            fontSize: "35px",
            color: "white",
          }}
        >
          {" "}
          Ecommerce Store{" "}
        </Link>
        <div className="icons">
          <span className="notification">
            <Link to="/wishlists">
              <FavoriteIcon sx={IconDesign} />
            </Link>
            <span style={BadgeDesign} className="badge">{WishItemInCart.length}</span>
          </span>
          <span className="notification">
            <Link to="/carts">
              <ShoppingCartIcon sx={IconDesign} />
            </Link>
            <span style={BadgeDesign} className="badge">{itemInCart.length}</span>
          </span>
          <span className="notification">
            <Link to="/login">
              <AccountCircleIcon sx={IconDesign} />
            </Link>
          </span>
        </div>
      </div>

      {/* // side bar  */}
      <div
        id={Drawer ? "mySidenav-open" : "mySidenav-close"}
        className="sidenav"
      >
        <div onClick={() => setDrawer(!Drawer)} className="closebtn">
          &times;
        </div>
        <div type="header-profile">
          <span
            style={{
              textDecoration: "none",
              fontWeight: "800",
              fontSize: "35px",
              color: "white",
            }}
          >
            {" "}
            Ecommerce{" "}
          </span>
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span>Account</span>
        </Link>
        <Link to="/orderhistory" style={{ textDecoration: "none" }}>
          <span>Orders History</span>
        </Link>
        <Link to="/address" style={{ textDecoration: "none" }}>
          <span>Addresses</span>
        </Link>
      </div>
    </>
  );
}

import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCart } from "../context/cart-context";

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
              <FontAwesomeIcon icon={faHeart} color="white" />
            </Link>
            <span className="badge">{WishItemInCart.length}</span>
          </span>
          <span className="notification">
            <Link to="/carts">
              <FontAwesomeIcon icon={faShoppingCart} color="white" />
            </Link>
            <span style={{fontWeight:"700",color:"black400"}} className="badge">{itemInCart.length}</span>
          </span>
          <span className="notification">
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} color="white" />
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

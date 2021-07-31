import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { getData, postData } from "../FetchingApi/fetchApi";
import { useLoader } from "../context/LoaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { setWishItemInCart } = useWishlist();
  const [itemInCart, setIteminCart] = useState([]);
  const { loader, setloader } = useLoader();
  const userId = localStorage.getItem("userId");
  let totalprice = 0;
  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCartItems = async () => {
    setloader(true);
    try {
      let response = await getData(`/carts/${userId}`);
      let result = response.cartItem;
      setloader(false);
      setIteminCart(result);
    } catch (e) {
      setloader(false);
    }
  };

  async function Removehandler(itemId) {
    setloader(true);
    const _id = itemId;
    try {
      let response = await postData(itemId, `/carts/delete/${_id}`);
      if (response.success === true) {
        setloader(false);
        getCartItems();
      }
    } catch (e) {
      console.log("Error in catch ", e);
      setloader(false);
    }
  }

  return loader ? (
    <div className="loader"></div>
  ) : itemInCart.length !== 0 ? (
    <div className="Cartframe">
      <div className="CartBoxLeft">
        <div
          style={{
            textAlign: "left",
            fontWeight: "500",
            fontSize: "2.5rem",
            margin: "0.5rem",
          }}
        >
          Shopping Cart
        </div>
        {itemInCart.map(function (item) {
          totalprice = totalprice + parseInt(item.price);
          return (
            <div key={item._id} className="CartItem">
              <img
                src={item.image}
                alt="item-name"
                height="200px"
                width="25%"
              />
              <div className="Cart-Item-description">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: "900", fontSize: "1.5rem" }}>
                    {item.name}
                  </span>
                  <span onClick={() => setWishItemInCart((item) => item + 1)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="black"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div style={{ fontWeight: "bold", color: "green" }}>
                  {item.inStock && "InStock"}
                </div>
                <div style={{ fontWeight: "500", color: "grey" }}>
                  {item.productdescription}
                </div>
                <button onClick={() => Removehandler(item._id)}>
                  Remove from Cart
                </button>
              </div>
              <div style={{ fontWeight: "900", margin: "1rem", width: "20%" }}>
                ₹ {item.price}.00
              </div>
            </div>
          );
        })}
      </div>
      <div className="CartBoxRight">
        <span>SUB-TOTAL : ₹ {totalprice}.00</span>
        {itemInCart.length && (
          <Link to="/address">
            {" "}
            <button className="cursor"> Proceed to Buy </button>
          </Link>
        )}
      </div>
    </div>
  ) : (
    <div style={{ marginTop: "10rem" }}>
      <span style={{ fontSize: "3rem", fontWeight: "bolder" }}>
        Your cart is Empty
      </span>
    </div>
  );
}

export default Cart;

import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "../../context/cart-context";
import { postData } from "../../FetchingApi/fetchApi";

function OrderItemCard({ price, _id, image, name, productdescription }) {
  const { getCartItems } = useCart();

  const Removehandler = async (id) => {
    try {
      let response = await postData(id, `/carts/delete/${id}`);
      if (response.success) {
        getCartItems();
      }
    } catch (e) {
      console.log("Error in catch ", e);
    }
  };
  return (
    <div className="OrderproductItem">
      <img src={image} alt="item" height="200px" width="100%" />

      <div>
        <span className="textBold">{name}</span>
        <FavoriteBorderIcon sx={{ marginLeft: "10px" }} />
      </div>
      <span>{productdescription}</span>
      <span> Rs.{price}</span>
      <div>
        <button
          onClick={() => Removehandler(_id)}
          className="order-remove-button"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default OrderItemCard;

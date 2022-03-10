import React from "react";
import { getData, postData } from "../../FetchingApi/fetchApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useWishlist } from "../../context/wishlist-context";

function WishItemCard({ _id, name, image, price, fastDelivery, productId }) {
  const userId = localStorage.getItem("userId");
  const { getWishItems } = useWishlist();

  const RemoveWishItem = async (e) => {
    try {
      const response = await getData(`/wishlists/delete/${e}`);
      response.success
        ? toast.success(response.message)
        : toast.error(response.message);
    } catch (error) {
      console.error(error);
    }

    await postData(
      { productId: productId, userid: userId },
      "/products/remove/wishlistArray"
    );
    getWishItems();
  };

  return (
    <div className="productItem">
      <img src={image} alt="itemimage" height="300px" width="100%" />
      <div className="name-like-section">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "1000" }}>{name}</span>
          <span style={{ fontSize: "12px" }}>by Amazon Brand - Solimo</span>
        </div>
      </div>
      <span
        className="margin"
        style={{
          fontSize: "13px",
          color: "green",
          fontWeight: "bolder",
        }}
      >
        16,710 Reviews
      </span>
      <span className="margin" style={{ fontSize: "15px", fontWeight: "700" }}>
        ₹ {price}.00
      </span>
      <div
        className="margin"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span style={{ marginTop: "0.5rem", fontWeight: "500" }}>
          {fastDelivery && "Fast Delivery Available"}
        </span>
        <span>
          <FontAwesomeIcon
            icon={faTrashAlt}
            size={"1x"}
            className="wish-delete"
            onClick={() => RemoveWishItem(_id)}
          />
        </span>
      </div>
    </div>
  );
}

export default WishItemCard;

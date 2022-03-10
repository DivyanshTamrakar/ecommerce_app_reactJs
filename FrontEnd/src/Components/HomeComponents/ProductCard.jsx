import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../FetchingApi/fetchApi";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProduct } from "../../context/ProductContext";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";

const ProductCard = ({ item }) => {
  const userId = localStorage.getItem("userId");
  const [localloader] = useState(false);
  const navigate = useNavigate();
  const { GetProductData } = useProduct();
  const { getWishItems } = useWishlist();
  const { getCartItems } = useCart();

  const AddToCartHandler = async (item) => {
    if (userId) {
      const body = {
        name: item.name,
        productModel: item.productModel,
        productUrl: item.productUrl,
        productId: item._id,
        customerId: userId,
        inStock: item.inStock,
        fastDelivery: item.fastDelivery,
        productdescription: item.productdescription,
        image: item.image,
        price: item.price,
      };
      const response = await postData(body, "/carts");
      await postData(
        { productId: body.productId, userid: body.customerId },
        "/additem"
      );
      GetProductData();
      getCartItems();
    } else {
      navigate("/login");
    }
  };

  const AddToWishilstHandler = async (item) => {
    if (userId) {
      const body = {
        name: item.name,
        productModel: item.productModel,
        productUrl: item.productUrl,
        productId: item._id,
        customerId: userId,
        inStock: item.inStock,
        fastDelivery: item.fastDelivery,
        productdescription: item.productdescription,
        image: item.image,
        price: item.price,
      };
      const response = await postData(body, "/wishlists");
      await postData(
        { productId: body.productId, userid: body.customerId },
        "/products/add/wishlistArray"
      );
      GetProductData();
      getWishItems();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={item.inStock ? "productItem" : "productItem outOfStock"}>
      {item.inStock && <div className="bestseller"></div>}
      <img src={item.image} alt="Itemimage" height="300px" width="100%" />
      <div className="name-like-section">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "1000" }}>{item.name}</span>
          <span style={{ fontSize: "12px" }}>by Amazon Brand - Solimo</span>
        </div>
        <span>
          {item.wishlistarray.includes(userId) ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon onClick={() => AddToWishilstHandler(item)} />
          )}
        </span>
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
        ₹ {item.price}.00
      </span>
      <span
        className="margin"
        style={{
          fontSize: "13px",
          color: `${item.inStock ? "green" : "red"}`,
          fontWeight: "bolder",
        }}
      >
        {item.inStock ? "InStock" : "Out of Stock"}
      </span>
      <div
        className="margin"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span style={{ marginTop: "0.2rem", fontWeight: "500" }}>
          {item.fastDelivery && "Fast Delivery Available"}
        </span>
        {item.inStock && (
          <span>
            {item.cartarray.includes(userId) ? (
              <Link to="/carts">
                {localloader ? (
                  "loading...."
                ) : (
                  <button className="gotocartbtn">Go to Cart</button>
                )}
              </Link>
            ) : (
              <button onClick={() => AddToCartHandler(item)} className="btn">
                Add To Cart
              </button>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

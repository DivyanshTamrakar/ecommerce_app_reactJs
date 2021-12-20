import React from 'react'
import { useNavigate } from "react-router-dom";
import { postData } from "../../FetchingApi/fetchApi";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ item, index }) => {

    const userId = localStorage.getItem("userId");
    let navigate = useNavigate();

    const AddToCartHandler = async (item) => {
        if (userId !== null) {
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
            let response = await postData(body, "/carts");
            if (response.available === true) {
                toast.info(response.message);
            }
        } else {
            navigate("/login");
        }
    }

    const AddToWishilstHandler = async (item) => {
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
        let response = await postData(body, "/wishlists");
        console.log("under wishlist");
        console.log(response);
        if (response.available === true) {
            toast.info(response.message);
        }
    }

    return (
        <div
            key={index}
            className={item.inStock ? "productItem" : "productItem outOfStock"}>
            {item.inStock && <div className="bestseller"></div>}
            <img
                src={item.image}
                alt="Itemimage"
                height="300px"
                width="100%"
            />
            <div className="name-like-section">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: "1000" }}>{item.name}</span>
                    <span style={{ fontSize: "12px" }}>
                        by Amazon Brand - Solimo
                    </span>
                </div>
                <span onClick={() => AddToWishilstHandler(item)}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        color="black"
                        aria-hidden="true"
                    />
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
            <span
                className="margin"
                style={{ fontSize: "15px", fontWeight: "700" }}
            >
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
                        <button
                            onClick={() => AddToCartHandler(item)}
                            className="btn"
                        >
                            Add To Cart
                        </button>
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProductCard;

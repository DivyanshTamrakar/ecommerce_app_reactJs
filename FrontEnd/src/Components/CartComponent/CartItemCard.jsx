import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useWishlist } from "../../context/wishlist-context";
import { postData } from "../../FetchingApi/fetchApi";
import { useLoader } from "../../context/LoaderContext";
import { useCart } from '../../context/cart-context';


function CartItemCard({ item }) {
    const { setWishItemInCart } = useWishlist();
    const { setloader } = useLoader();
    const {getCartItems} = useCart();


    const Removehandler = async (itemId) => {
        setloader(true);
        const _id = itemId;
        try {
            let response = await postData(itemId, `/carts/delete/${_id}`);
            if (response.success) {
                setloader(false);
                getCartItems();
            }
        } catch (e) {
            console.log("Error in catch ", e);
            setloader(false);
        }
    }
    return (
        <div className="CartItem">
            <img
                src={item.image}
                alt="item-name"
                height="200px"
                width="auto"
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
    )
}

export default CartItemCard

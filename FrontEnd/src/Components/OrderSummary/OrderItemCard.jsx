import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCart } from '../../context/cart-context';
import { postData } from '../../FetchingApi/fetchApi';
import { useLoader } from '../../context/LoaderContext';

function OrderItemCard({ price, _id, image, name, productdescription }) {

    const { getCartItems } = useCart();
    const {setloader} = useLoader();

    const Removehandler = async (id) => {
        setloader(true);
        try {
            let response = await postData(id, `/carts/delete/${id}`);
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
        <div className="OrderproductItem">
            <img
                src={image}
                alt="item"
                height="200px"
                width="100%"
            />

            <div>
                <span className='textBold'>{name}</span>
                <FavoriteBorderIcon sx={{marginLeft:'10px'}}/>
            </div>
            <span>{productdescription}</span>
            <span> Rs.{price}</span>
            <div>
                <button onClick={() => Removehandler(_id)} className="order-remove-button">
                    Remove from Cart
                </button>
            </div>
        </div>
    )
}

export default OrderItemCard

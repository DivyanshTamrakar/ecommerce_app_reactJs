import React from 'react';
import { useCart } from '../../context/cart-context'
import OrderItemCard from './OrderItemCard';


function OrderSummaryList() {
    const { itemInCart} = useCart();
    return (
        <div className="productbox">
            {itemInCart.map(({ price, _id, image, name, productdescription}) => {
                return <OrderItemCard key={_id} name={name} productdescription={productdescription} price = {price} _id={_id} image={image}/>;
            })}
        </div>

    )
}

export default OrderSummaryList

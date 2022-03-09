import React from 'react'
import { useWishlist } from '../../context/wishlist-context';
import WishItemCard from './WishItemCard';


function WishListing() {

    const { ItemInWishlist } = useWishlist();

    return (
        <div className="productbox">
            {ItemInWishlist.map(({ _id, name, image, price, fastDelivery, productId }) => {
                return (
                    <WishItemCard key={_id} _id={_id} name={name} image={image} price={price} fastDelivery={fastDelivery} productId={productId} />
                );
            })}
        </div>
    )
}

export default WishListing

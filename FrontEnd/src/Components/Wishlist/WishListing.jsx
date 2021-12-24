import React from 'react'
import WishItemCard from './WishItemCard';


function WishListing({ data }) {
    return (
        <div className="productbox">
            {data.map(({ _id, name, image, price, fastDelivery }) => {
                return (
                    <WishItemCard key={_id} _id={_id} name={name} image={image} price={price} fastDelivery={fastDelivery} />
                );
            })}
        </div>
    )
}

export default WishListing

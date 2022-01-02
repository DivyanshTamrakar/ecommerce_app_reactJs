import React from 'react'
import WishListing from './WishListing'
import EmptyWishlist from './EmptyWishlist'
import { useWishlist } from '../../context/wishlist-context';

function WishListFrame() {
  const { ItemInWishlist } = useWishlist();

  return (
    <div>
      {
        ItemInWishlist.length !== 0 ?
          <WishListing />
          : <EmptyWishlist />
      }
    </div>
  )
}

export default WishListFrame

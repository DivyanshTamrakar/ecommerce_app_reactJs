import React from 'react'
import WishListing from './WishListing'
import EmptyWishlist from './EmptyWishlist'
import { useLoader } from '../../context/LoaderContext';
import Loader from '../Loader';
import { useWishlist } from '../../context/wishlist-context';

function WishListFrame() {
  const { loader } = useLoader();
  const { ItemInWishlist } = useWishlist();

  return (
    <div>
      {
        loader ? <Loader /> :

          ItemInWishlist.length !== 0 ?
            <WishListing />
            : <EmptyWishlist />


      }
    </div>
  )
}

export default WishListFrame

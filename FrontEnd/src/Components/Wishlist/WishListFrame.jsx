import React from "react";
import WishListing from "./WishListing";
import EmptyWishlist from "./EmptyWishlist";
import { useWishlist } from "../../context/wishlist-context";
import { useLoader } from "../../context/LoaderContext";
import Loader from "../Loader";

function WishListFrame() {
  const { itemInWishlist } = useWishlist();
  const { loader } = useLoader();

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {itemInWishlist.length > 0 ? <WishListing /> : <EmptyWishlist />}
        </div>
      )}
    </div>
  );
}

export default WishListFrame;

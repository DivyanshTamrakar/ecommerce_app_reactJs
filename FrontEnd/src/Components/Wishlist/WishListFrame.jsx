import React, { useState, useEffect } from 'react'
import WishListing from './WishListing'
import EmptyWishlist from './EmptyWishlist'
import { useLoader } from '../../context/LoaderContext';
import { getData } from '../../FetchingApi/fetchApi';
import Loader from '../Loader';

function WishListFrame() {
  const userId = localStorage.getItem("userId");
  const [wishData, setwishdata] = useState([]);
  const { loader, setloader } = useLoader();

  useEffect(() => {
    getWishItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWishItems = async () => {
    setloader(true);
    try {
      let response = await getData(`/wishlists/${userId}`);
      setloader(false);
      setwishdata(response.wishlistitem);
    } catch (e) {
      console.error("Error in catch ", e);
      setloader(false);
    }
  };

  return (
    <div>
      {
        loader ? <Loader /> :

          wishData.length !== 0 ?
            <WishListing data={wishData} />
            : <EmptyWishlist />


      }
    </div>
  )
}

export default WishListFrame

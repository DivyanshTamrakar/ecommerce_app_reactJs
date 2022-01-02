/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-context';
import { Link } from "react-router-dom";



const IconDesign = { color: 'white', fontSize: '2rem', cursor: 'pointer' };
function ActionIcons() {

    const { ItemInWishlist, getWishItems } = useWishlist();
    const { itemInCart, getCartItems } = useCart();


    useEffect(() => {
        getCartItems();
    }, [itemInCart])


    useEffect(() => {
        getWishItems();
    }, [ItemInWishlist])


    return (
        <div className='Actionbox'>
            <div className='notification'>
                <Link to='/wishlists' className='textDecorationNone'>
                    <FavoriteIcon sx={IconDesign} />
                    <span className="badge">{ItemInWishlist.length}</span>
                </Link>
            </div>
            <div className='notification'>
                <Link to='/carts' className='textDecorationNone'>
                    <ShoppingCartIcon sx={IconDesign} />
                    <span className="badge">{itemInCart.length}</span>
                </Link>
            </div>
            <Link to='/login' className='textDecorationNone'>
                <AccountCircleIcon sx={IconDesign} />

            </Link>

        </div>
    )
}

export default ActionIcons

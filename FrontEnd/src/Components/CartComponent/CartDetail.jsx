import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart-context';



function CartDetail() {
    const {totalprice,itemInCart} = useCart();
    return (
        <div className="CartBoxRight">
            <div className='HeadingPrice'>PRICE DETAILS</div>
            <hr/>
            <span>Total Items : {itemInCart.length}</span>
            <span>SUB-TOTAL : ₹ {totalprice}.00</span>
                <Link to="/address">
                    <button className="cursor"> Proceed to Buy </button>
                </Link>
        </div>
    )
}

export default CartDetail

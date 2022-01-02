import React from 'react';
import CartDetail from './CartDetail';
import CartList from './CartList';
import EmptyCart from './EmptyCart'
import { useCart } from '../../context/cart-context';




const CartFrame = () => {

    const { itemInCart } = useCart();

    return (
        <div className='CartBox'>
            {
                itemInCart.length ?
                    <div>
                        <div className='CartHeading' >
                            Shopping Cart
                        </div>
                        <div className="Cartframe">
                            <CartList />
                            <CartDetail />
                        </div>
                    </div> : <EmptyCart />
            }
        </div>
    );
}

export default CartFrame

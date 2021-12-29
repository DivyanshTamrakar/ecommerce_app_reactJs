import React from 'react'
import { useProduct } from '../context/ProductContext'

function Drawer() {
    const { dispatch } = useProduct();
    return (
        <div className='Drawer'>
            <div className="filterBox">
                <div>
                    <input
                        onClick={() => dispatch({ type: "TOGGLE_INVENTORY" })}
                        type="checkbox"
                    />
                    <h4>InStock </h4>
                </div>
                <div>
                    <input
                        onClick={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                        type="checkbox"
                    />
                    <h4>Fast-Delivery</h4>
                </div>
            </div>
            <div className="filterBox">
                <div>
                    <input
                        onClick={() =>
                            dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                        }
                        type="radio"
                        name="sort"
                    />
                    <h4>Price Low To High</h4>
                </div>
                <div>
                    <input
                        onClick={() =>
                            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                        }
                        type="radio"
                        name="sort"
                    />
                    <h4>Price Hight To Low</h4>
                </div>
            </div>
        </div>
    )
}

export default Drawer

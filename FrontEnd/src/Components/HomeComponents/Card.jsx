import React, { useEffect } from 'react'
import { useProduct } from '../../context/ProductContext';
import ProductCard from "./ProductCard";

const Card = () => {
    const { GetProductData, filteredData } = useProduct();
    const userId = localStorage.getItem("userId");
    useEffect(() => {
        GetProductData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);
    return (
        <div>
            {filteredData.length !== 0 ? (
                <div className="productbox">
                    {filteredData.map((item, index) => {
                        return <ProductCard item={item} index={index} />
                    })}
                </div>
            ) : (
                <div className="loader"> </div>
            )}
        </div>
    )
}

export default Card

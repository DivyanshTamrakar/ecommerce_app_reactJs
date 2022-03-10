import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import Loader from "../Loader";
import "./Card.css";

const Card = () => {
  const { GetProductData, filteredData } = useProduct();
  useEffect(() => {
    GetProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {filteredData.length !== 0 ? (
        <div className="listingproductbox">
          {filteredData.map((item, index) => {
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Card;

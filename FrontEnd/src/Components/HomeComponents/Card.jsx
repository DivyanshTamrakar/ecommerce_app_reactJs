import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import Loader from "../Loader";
import "./Card.css";
const Card = () => {
  const { GetProductData, filteredData } = useProduct();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    GetProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  return (
    <>
      {filteredData.length !== 0 ? (
        <div className="productbox">
          {filteredData.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Card;

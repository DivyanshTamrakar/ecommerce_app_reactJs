import { useProduct } from "../context/ProductContext";

export default function Filter() {
  const { dispatch } = useProduct();
  return (
    <div className="FilterFrame">
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
          <h4>fast-Delivery</h4>
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
  );
}

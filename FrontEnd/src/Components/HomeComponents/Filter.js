import { useProduct } from "../../context/ProductContext";
import { useState } from "react";

const Filter = () => {
  const [filter, setfilter] = useState(false);
  const { dispatch } = useProduct();

  return (
    <div>
      <div>
        <button
          onClick={() => setfilter(!filter)}
          className="btn"
          style={{ backgroundColor: "rgb(255,214,36)" }}
        >
          Show Filters
        </button>
      </div>

      {filter && <div className="FilterFrame">

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
      </div>}
    </div>
  );
}

export default Filter;
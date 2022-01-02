import { createContext, useContext, useState, useReducer } from "react";
import { getData } from "../FetchingApi/fetchApi.js";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productdata, setproductData] = useState([]);

  async function GetProductData() {
    let response = await getData("/products");
    setproductData(response.product);
  }

  const initialState = {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null,
  };
  const [{ showInventoryAll, showFastDeliveryOnly, sortBy }, dispatch] =
    useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "SORT":
        return {
          ...state,
          sortBy: action.payload,
        };
      case "TOGGLE_INVENTORY":
        return (state = {
          ...state,
          showInventoryAll: !state.showInventoryAll,
        });

      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !state.showFastDeliveryOnly,
        });
      default:
        console.log("sorry");
    }
  }
  function getSortedData(productdata, sortvalue) {
    if (sortvalue === "PRICE_HIGH_TO_LOW") {
      return productdata.sort((a, b) => b.price - a.price);
    }
    if (sortvalue === "PRICE_LOW_TO_HIGH") {
      return productdata.sort((a, b) => a.price - b.price);
    }

    return productdata;
  }

  function getfilteredData(
    dataitem,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return dataitem
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData(productdata, sortBy);
  const filteredData = getfilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll,
  });

  return (
    <ProductContext.Provider value={{ GetProductData, filteredData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}

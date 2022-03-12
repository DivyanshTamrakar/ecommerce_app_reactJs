import OrderSummaryList from "../Components/OrderSummary/OrderSummaryList";
import { useCart } from "../context/cart-context";
import PlacedOrderFooter from "../Components/OrderSummary/PlacedOrderFooter";

const OrderSummary = () => {
  const { itemInCart } = useCart();

  

  return (
    <div>
      <div>
        <h1>Order Summary</h1>
        <OrderSummaryList />
      </div>
      <div style={{ textAlign: "left" }}>
        {itemInCart.length !== 0 && <PlacedOrderFooter />}
      </div>
    </div>
  );
};

export default OrderSummary;

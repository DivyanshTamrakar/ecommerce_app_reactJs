import OrderSummaryList from "../Components/OrderSummary/OrderSummaryList";
import { useCart } from "../context/cart-context";
import PlacedOrderFooter from "../Components/OrderSummary/PlacedOrderFooter";

const OrderSummary = () => {
  const { itemInCart } = useCart();


  // const placeOrderhandler = async () => {
  //   try {
  //     await getData(`/carts/delete/all/${userId}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   alert(" Your order successfull placed !");
  //   navigate("/");
  // };




  return (
    <div>
      <div>
        <h1>Order Summary</h1>
        <OrderSummaryList />
      </div>
      <div style={{ textAlign: 'left' }}>
        {itemInCart.length !== 0 && <PlacedOrderFooter />}
      </div>
    </div>
  );
}

export default OrderSummary;

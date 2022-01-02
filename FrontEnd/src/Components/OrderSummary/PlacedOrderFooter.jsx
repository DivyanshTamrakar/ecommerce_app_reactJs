import { Button } from '@mui/material';
import React from 'react'
import { useCart } from '../../context/cart-context'
import { postData } from '../../FetchingApi/fetchApi';



const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function PlacedOrderFooter() {


  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = await postData({ "userId": localStorage.getItem('userId'), "amount": "5000" }, '/razorpay');
    if (data.success) { console.log("data", data); }
    var options = {
      key: "rzp_test_x5vD6ApR8W8yaS", // Enter the Key ID generated from the Dashboard
      currency: data.currency,
      amount: "5000",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",

      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  const { totalprice } = useCart()
  return (
    <div>
      <h2 className="totalamount">{`Total Cart Value = ₹${totalprice}`}</h2>
      <Button color='primary' onClick={displayRazorpay} variant="contained"
        sx={{ margin: '10px' }}>
        Place Your Order
      </Button>

    </div>
  )
}

export default PlacedOrderFooter

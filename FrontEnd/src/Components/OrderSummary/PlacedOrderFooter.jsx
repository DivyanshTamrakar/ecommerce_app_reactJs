import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { postData, getData } from "../../FetchingApi/fetchApi";
import swal from "sweetalert";

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
};

function PlacedOrderFooter() {
  const { totalprice } = useCart();
  const navigate = useNavigate();

  // const placeOrderhandler = async () => {
  //   try {
  //     const res = await getData(`/carts/delete/all/${userId}`);
  //     console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = await postData(
      { userId: localStorage.getItem("userId"), amount: totalprice },
      "/razorpay"
    );
    var options = {
      key: "rzp_test_x5vD6ApR8W8yaS", // Enter the Key ID generated from the Dashboard
      currency: data.currency,
      amount: data.amount,
      name: "Divyansh Ecommerce",
      description: "Test Transaction",
      image:
        "https://c8.alamy.com/zooms/9/9e95d8f1f8bc4c42a033f680574f3122/2d8eh9y.jpg",

      order_id: data.id,
      handler: function (response) {
        if (response.razorpay_order_id) {
          swal({
            icon: "success",
            title: "Order Placed Successfully!",
            closeOnClickOutside: false,
          }).then((okay) => {
            if (okay) {
              navigate("/");
            }
          });
        }
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

  return (
    <div>
      <h2 className="totalamount">{`Total Cart Value = ₹${totalprice}`}</h2>
      <Button
        color="primary"
        onClick={displayRazorpay}
        variant="contained"
        sx={{ margin: "10px" }}
      >
        Place Your Order
      </Button>
    </div>
  );
}

export default PlacedOrderFooter;

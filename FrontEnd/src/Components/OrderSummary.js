import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import { getData, postData } from "../FetchingApi/fetchApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function loadScript(src) {
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

function OrderSummary() {
  const [items, setItems] = useState([]);
  let { loader, setloader } = useLoader();
  const userId = localStorage.getItem("userId");

  let totalprice = 0;

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line
  }, []);
  const getCartItems = async () => {
    setloader(true);
    try {
      let response = await getData(`/carts/${userId}`);
      let result = response.cartItem;
      setloader(false);
      setItems(result);
    } catch (e) {
      setloader(false);
    }
  };

  // const placeOrderhandler = async () => {
  //   try {
  //     await getData(`/carts/delete/all/${userId}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   alert(" Your order successfull placed !");
  //   navigate("/");
  // };

  async function Removehandler(id) {
    setloader(true);
    try {
      let response = await postData(id, `/carts/delete/${id}`);
      if (response.success === true) {
        setloader(false);
        getCartItems();
      }
    } catch (e) {
      console.log("Error in catch ", e);
      setloader(false);
    }
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }



    const data = await postData({ "userId": localStorage.getItem('userId'), "amount": "5000" }, '/razorpay');


    // const data = await fetch("http://localhost:5000/razorpay", {
    //   method: "POST",
    // }).then((t) => t.json());
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

  return (
    <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <div>
          <div>
            <h1>Order Summary</h1>
          </div>
          <div className="productbox">
            {items.map(function ({
              price,
              _id,
              image,
              name,
              productdescription,
            }) {
              totalprice = totalprice + parseInt(price);

              return (
                <div key={_id} className="OrderproductItem">
                  <img
                    className="corner-radius"
                    src={image}
                    alt="item"
                    height="200px"
                    width="212px"
                  />

                  <div className="namelike">
                    <span style={{ fontWeight: "bolder" }}>{name}</span>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <span>{productdescription}</span>
                  <span> Rs.{price}</span>
                  <div className="button-group">
                    <button onClick={() => Removehandler(_id)} className="btn">
                      Remove from Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {items.length !== 0 && (
            <div>
              <h2 className="totalamount">{`Total Cart Value = ${totalprice}`}</h2>
              <button onClick={displayRazorpay} className="placeOrder">
                Place Your Order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderSummary;

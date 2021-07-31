import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { getData, postData } from "../FetchingApi/fetchApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function OrderSummary() {
  const [items, setItems] = useState([]);
  let { loader, setloader } = useLoader();
  const navigate = useNavigate();
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

  const placeOrderhandler = async () => {
    try {
      await getData(`/carts/delete/all/${userId}`);
    } catch (error) {
      console.error(error);
    }
    alert(" Your order successfull placed !");
    navigate("/");
  };

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
              <button onClick={placeOrderhandler} className="placeOrder">
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

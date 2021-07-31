import { useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { Link } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Toast } from "../Toast/toast";
import { toast } from "react-toastify";

export default function Address() {
  const [address, setAddress] = useState([]);
  const userId = localStorage.getItem("userId");
  const { loader, setloader } = useLoader();
  let selectAddress = 0;
  const [clickvalue, setclickvalue] = useState(selectAddress);

  useEffect(() => {
    getAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAddressData = async () => {
    setloader(true);
    try {
      let response = await getData(`/address/${userId}`);
      let result = response.address;
      setloader(false);
      setAddress(result);
    } catch (e) {
      setloader(false);
    }
  };

  function ClickCardHandler(id) {
    setclickvalue((selectAddress = id));
  }

  const RemoveHandler = async (e) => {
    console.log(e);
    try {
      let response = await getData(`/address/delete/${e}`);
      response.success
        ? toast.success(response.message)
        : toast.error(response.message);
      getAddressData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddressFrame">
      <span id="heading">Select Address</span>

      {
        <div className="show-address">
          {loader && <div className="loader"></div>}
          {address.length !== 0 &&
            address.map(
              ({ address, city, mobile, name, pincode, state, _id }, index) => (
                <div
                  className="AddressCard"
                  onClick={() => ClickCardHandler(_id)}
                >
                  <div>Address {index + 1}</div>
                  <span style={{ marginTop: "0.5rem", fontWeight: "580" }}>
                    {name}
                  </span>
                  <span style={{ maxWidth: "90%" }}>{address}</span>
                  <div>
                    <span>{city}</span> ,<span>{pincode}</span>
                  </div>
                  <div>
                    <span>{state}</span> ,<span>India</span>
                  </div>
                  <span>{mobile}</span>

                  <div onClick={() => RemoveHandler(_id)}>
                    <FontAwesomeIcon icon={faTrash} size="1x" color="red" />
                    <span
                      style={{ fontWeight: "bolder", marginLeft: "0.4rem" }}
                    >
                      Remove
                    </span>
                  </div>

                  {clickvalue === _id && (
                    <span>
                      <Link
                        to="/ordersummary"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="btn deliver">
                          {" "}
                          Deliver to this address
                        </button>
                      </Link>
                    </span>
                  )}
                </div>
              )
            )}
          <Link to="/addnewaddress">
            <div className="AddressCard addNewAddress">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="6x" />
              <span>Add New Address</span>
            </div>
          </Link>
        </div>
      }

      <div>{Toast()}</div>
    </div>
  );
}

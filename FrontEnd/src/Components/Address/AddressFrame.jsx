import React, { useState, useEffect } from "react";
import AddressCard from "./AddressCard";
import { Link } from "react-router-dom";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import "./Address.css";
import { getData } from "../../FetchingApi/fetchApi";
import { useLoader } from "../../context/LoaderContext";
import Loader from "../Loader";

function AddressFrame() {
  const userId = localStorage.getItem("userId");
  const [address, setAddress] = useState([]);
  const { loader, setloader } = useLoader();

  useEffect(() => {
    getAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAddressData = async () => {
    setloader(true);
    try {
      const response = await getData(`/address/${userId}`);
      setAddress(response.address);
      setloader(false);
    } catch (e) {
      console.error(e);
      setloader(false);
    }
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="show-address">
          {address.length > 0 &&
            address.map(
              ({ address, city, mobile, name, pincode, state, _id }, index) => {
                return (
                  <AddressCard
                    key={_id}
                    index={index}
                    address={address}
                    city={city}
                    mobile={mobile}
                    name={name}
                    pincode={pincode}
                    state={state}
                    _id={_id}
                    getAddressData={getAddressData}
                  />
                );
              }
            )}
          <Link to="/addnewaddress" className="textDecorationNone">
            <div className="AddressCard addNewAddress ">
              <EditLocationOutlinedIcon sx={{ fontSize: "75px" }} />
              <span>Add New Address</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddressFrame;

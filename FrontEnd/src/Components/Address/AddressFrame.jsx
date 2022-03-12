import React, { useState, useEffect } from "react";
import AddressCard from "./AddressCard";
import { Link } from "react-router-dom";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import "./Address.css";
import { getData } from "../../FetchingApi/fetchApi";


function AddressFrame() {
  const userId = localStorage.getItem("userId");
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAddressData = async () => {
    try {
      let response = await getData(`/address/${userId}`);
      setAddress(response.address);
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div className="show-address">
      {address.length !== 0 &&
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
  );
}

export default AddressFrame;

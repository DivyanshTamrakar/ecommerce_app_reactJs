import React from 'react'
import { useState } from "react";
import { postData } from "../../FetchingApi/fetchApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './Address.css'
const AddressForm = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const [userAddress, setuserAddress] = useState({
        fullName: "",
        mobile: "",
        pincode: "",
        fullAddress: "",
        city: "",
        state: "",
    });

    const RegisterInputAddress = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserAddress({ ...userAddress, [name]: value });
    }
    const SubmitButtonHandler = (e) => {
        e.preventDefault();
        const newRegistraion = { ...userAddress };
        RegisterAddress({
            name: newRegistraion.fullName,
            mobile: newRegistraion.mobile,
            city: newRegistraion.city,
            fulladd: newRegistraion.fullAddress,
            pincode: newRegistraion.pincode,
            state: newRegistraion.state,
        });
    }

    const RegisterAddress = async ({
        name,
        mobile,
        fulladd,
        state,
        pincode,
        city,
    }) => {
        const body = {
            name: name,
            customerId: userId,
            address: fulladd,
            mobile: mobile,
            state: state,
            pincode: pincode,
            city: city,
        };

        try {
            let response = await postData(body, "/address");
            response.success && navigate("/address");
        } catch (e) {
            console.error(e);
            toast.error(e);
        }
    };

    return (
        <form action="" onSubmit={SubmitButtonHandler}>
            <div className="form-frame AddressFields">
                <span>Add new Address</span>
                <div>
                    <label>Full name</label>
                    <input
                        type="text"
                        value={userAddress.fullName}
                        onChange={RegisterInputAddress}
                        name="fullName"
                        autoComplete="off"
                        placeholder="Enter your full name"
                    />
                </div>
                <div>
                    <label>Mobile</label>
                    <input
                        type="number"
                        value={userAddress.mobile}
                        onChange={RegisterInputAddress}
                        name="mobile"
                        autoComplete="off"
                        placeholder="Enter mobile"
                    />
                </div>
                <div>
                    <label>Pin Code</label>
                    <input
                        type="number"
                        maxLength="6"
                        value={userAddress.pincode}
                        onChange={RegisterInputAddress}
                        name="pincode"
                        autoComplete="off"
                        placeholder="Enter pincode"
                    />
                </div>
                <div>
                    <label>Full Address</label>
                    <input
                        type="text"
                        value={userAddress.fullAddress}
                        onChange={RegisterInputAddress}
                        name="fullAddress"
                        autoComplete="off"
                        placeholder="H.no, Flat no, Area"
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        value={userAddress.city}
                        onChange={RegisterInputAddress}
                        name="city"
                        autoComplete="off"
                        placeholder="Enter City"
                    />
                </div>
                <div>
                    <label>State</label>
                    <input
                        type="text"
                        value={userAddress.state}
                        onChange={RegisterInputAddress}
                        name="state"
                        autoComplete="off"
                        placeholder="Enter State"
                    />
                </div>
                <div>
                    {" "}
                    <button type="submit">Add Address</button>{" "}
                </div>
            </div>
        </form>);
}

export default AddressForm;

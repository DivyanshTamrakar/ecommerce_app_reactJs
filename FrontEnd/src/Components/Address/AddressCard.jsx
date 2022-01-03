import { getData } from '../../FetchingApi/fetchApi';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './Address.css'

function AddressCard({ address, city, mobile, name, pincode, state, _id, index }) {

    const [clickvalue, setclickvalue] = useState("0");

    const RemoveHandler = async (e) => {
        try {
            const response = await getData(`/address/delete/${e}`);
            response.success
                ? toast.success(response.message)
                : toast.error(response.message);
            //  getAddressData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="AddressCard"
            onClick={() => setclickvalue(_id)}>
            <div>Address {index + 1}</div>
            <span className='AddressText fontWeight' >
                {name}
            </span>
            <span className='AddressText'>{address}</span>
            <span className='AddressText'>{city}</span>
            <span className='AddressText'>{pincode}</span>
            <span className='AddressText'>{state}</span>
            <span className='AddressText'>India</span>
            <span className='AddressText'>{mobile}</span>

            <Button color='secondary' onClick={() => RemoveHandler(_id)} variant="contained" startIcon={<DeleteIcon color='error' />}>
                Remove Address
            </Button>

            {clickvalue === _id && (
                <span>
                    <Link
                        to="/ordersummary"
                        className='textDecorationNone'
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
}

export default AddressCard

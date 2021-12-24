import { useState, useEffect } from "react";
import { getData } from "../FetchingApi/fetchApi";
import { useLoader } from "../context/LoaderContext";
import Toast from "../Components/toast";
import AddressFrame from "../Components/Address/AddressFrame";
import Loader from '../Components/Loader';

export default function Address() {
  const [address, setAddress] = useState([]);
  const userId = localStorage.getItem("userId");
  const { loader, setloader } = useLoader();

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



  return (
    <div className="AddressFrame">
      <span id="heading">Select Address</span>
      {loader ? <Loader /> : <AddressFrame address={address} />}
      <Toast />
    </div>
  );
}

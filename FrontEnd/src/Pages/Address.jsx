import Toast from "../Components/toast";
import AddressFrame from "../Components/Address/AddressFrame";
import '../Components/Address/Address.css';




export default function Address() {
  return (
    <div className="AddressFrame">
      <span id="heading">Select Address</span>
      <AddressFrame/>
      <Toast />
    </div>
  );
}

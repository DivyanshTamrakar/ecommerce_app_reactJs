import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "../Components/SignUp/SignUpForm";
import Toast from "../Components/toast";

export default function Signup() {
  return (
    <div>
      <SignUpForm />
      <Toast />
    </div>
  );
}

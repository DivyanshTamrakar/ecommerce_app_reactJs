import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toast(){
    return <ToastContainer
    position = "bottom-center"
    autoClose = {1000}
    hideProgressBar = {true}
    newestOnTop = {false}
    closeOnClick    rtl = {false}
    pauseOnFocusLoss draggable pauseOnHover />
}
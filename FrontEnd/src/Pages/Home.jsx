import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../Toast/toast";
import Filter from "../Components/HomeComponents/Filter";
import Card from '../Components/HomeComponents/Card';


const Home = () => {

    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            <Filter />
            <Card />
            {Toast()}
        </div>
    );
}

export default Home

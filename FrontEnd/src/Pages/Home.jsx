import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../Components/toast";
import Card from "../Components/HomeComponents/Card";
import Caraousel from "../Components/Caraousel";

const Home = () => {
  return (
    <div>
      <Caraousel />
      <Card />
      <Toast />
    </div>
  );
};

export default Home;

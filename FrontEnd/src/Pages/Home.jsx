import React, { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
const Toast = lazy(() => import('../Components/toast'));
const Card = lazy(() => import('../Components/HomeComponents/Card'));
const Caraousel = lazy(() => import('../Components/Caraousel'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Caraousel />
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <Card />
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <Toast />
      </Suspense>
    </div>
  );
};

export default Home;

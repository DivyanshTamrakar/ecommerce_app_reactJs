import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Caraousel() {
  return (
    <Carousel 
    infiniteLoop={true}
    showThumbs={false}
    >
      <div className="pad-caraousel">
        <img
          alt=""
          src="https://m.media-amazon.com/images/I/81aKhWlR7vL._SX3740_.jpg"
        />
      </div>
      <div className="pad-caraousel">
        <img
          alt=""
          src="https://m.media-amazon.com/images/I/7159FfgbU6L._SX3000_.jpg"
        />
      </div>
      <div className="pad-caraousel">
        <img
          alt=""
          src="https://m.media-amazon.com/images/I/618B1HnAxLL._SX3740_.jpg"
        />
      </div>
    </Carousel>
  );
}

export default Caraousel;

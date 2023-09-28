import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style2.css";
import Carousel from 'react-bootstrap/Carousel';
import Activite from "../CarouselParts/Activite"
import Immobilier from "../CarouselParts/Immobilier";
import BTP  from "../CarouselParts/BTP";
import Social from "../CarouselParts/Social";
import Drivers from "../CarouselParts/Drivers";
import Transport from "../CarouselParts/Transport";


const Decouvrez = () => {
  return (
    <div className="col-12 col-lg-6 ">
      <Carousel className="custom-carousel">
        <Carousel.Item className="slide " id="first">
          <Activite/>
        </Carousel.Item>

        <Carousel.Item className="slide" id="seconde">
            <Immobilier />
        </Carousel.Item>
        
        <Carousel.Item className="slide">
            <Social />
        </Carousel.Item>

        <Carousel.Item className="slide">
            <BTP />
        </Carousel.Item>

        <Carousel.Item className="slide">
            <Drivers />
        </Carousel.Item>

        <Carousel.Item className="slide">
            <Transport />
        </Carousel.Item>

    </Carousel>
   
</div>

  );
};

export default Decouvrez;
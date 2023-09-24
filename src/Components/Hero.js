import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { hero1, hero2, hero3, hero4, hero5 } from "../assets";

const Hero = () => {
  return (
    <Carousel
      autoPlay
      selectedItem={2}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      stopOnHover={false}
      showIndicators={false}
    >
      <div>
        <img src={hero1} alt="hero1" />
      </div>
      <div>
        <img src={hero2} alt="hero2" />
      </div>
      <div>
        <img src={hero3} alt="hero3" />
      </div>
      <div>
        <img src={hero4} alt="hero4" />
      </div>
      <div>
        <img src={hero5} alt="hero5" />
      </div>
    </Carousel>
  );
};

export default Hero;

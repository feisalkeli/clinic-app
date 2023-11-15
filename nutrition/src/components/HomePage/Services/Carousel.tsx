// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Carousel } from "react-responsive-carousel";
import "./CardCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "./Cards";
import "swiper/css";
import image1 from "../../../assets/img/content/balance-body-mind-01.jpg";
import image2 from "../../../assets/img/content/healthy-daily-life-01.jpg";
import image3 from "../../../assets/img/content/personalized-nutrition-01.jpg";
import image4 from "../../../assets/img/content/weight-loss-program-01.jpg";
import image5 from "../../../assets/img/content/fitness-performance-01.jpg";
import image6 from "../../../assets/img/content/support-motivation-01.jpg";

import logo1 from "../../../assets/img/icons/icon-16.png";
import logo2 from "../../../assets/img/icons/icon-17.png";
import logo3 from "../../../assets/img/icons/icon-18.png";
import logo4 from "../../../assets/img/icons/icon-19.png";
import logo5 from "../../../assets/img/icons/icon-20.png";
import logo6 from "../../../assets/img/icons/icon-21.png";

const cardDetails = [
  {
    title: "Balance body and Mind",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image1,
    logo: logo1,
  },
  {
    title: "Healthy Daily Life",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image2,
    logo: logo2,
  },
  {
    title: "Personalized Nutrition",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image3,
    logo: logo3,
  },
  {
    title: "Weight Loss Programme",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image4,
    logo: logo4,
  },
  {
    title: "Fitness Perfomance",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image5,
    logo: logo5,
  },
  {
    title: "Support Motivation",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image6,
    logo: logo6,
  },
];

const CardCarousel = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4  items-center   ">
        {/* Render each card individually on the page */}
        {cardDetails.map((card, index) => (
          <div key={index} className="">
            <Cards card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardCarousel;

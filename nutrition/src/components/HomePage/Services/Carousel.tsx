import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "./Cards";
import "swiper/css";
import image1 from "../../../assets/img/content/balance-body-mind-01.jpg";
import image2 from "../../../assets/img/content/healthy-daily-life-01.jpg";
import image3 from "../../../assets/img/content/personalized-nutrition-01.jpg";
import image4 from "../../../assets/img/content/weight-loss-program-01.jpg";
import image5 from "../../../assets/img/content/fitness-performance-01.jpg";
import image6 from "../../../assets/img/content/support-motivation-01.jpg";

const cardDetails = [
  {
    title: "Balance body and Mind",
    description:
      "Our nutrition team loves the benefit of exercise and healthy food",
    image: image1,
    // logoo:
  },
];

const Carousel = () => {
  return (
    <>
      <Swiper loop={true} autoplay={true} effect="" direction="vertical">
        <SwiperSlide>
          {cardDetails.map(() => (
            <Cards />
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

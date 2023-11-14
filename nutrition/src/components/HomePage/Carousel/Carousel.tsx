import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/img/banner/banner-04.jpg";
import banner2 from "../../../assets/img/banner/banner-07.jpg";
import banner3 from "../../../assets/img/banner/banner-06.jpg";

const slider = [
  {
    title: "It's not a diet, It's a Habitro",
    description: "Healthy Choices for a Healthier You",
    text: "We encourage you to fix and prevent illness with nutrition for living a healthy life.",
    image: banner1,
  },
  {
    title: "It's not a diet, It's a Habitro",
    description: "Nourishing with Hygenic Food",
    text: "We encourage you to fix and prevent illness with nutrition for living a healthy life.",
    image: banner2,
  },
  {
    title: "It's not a diet, It's a Habitro",
    description: "Loss The Fat,Eat Right,Be Right.",
    text: "We encourage you to fix and prevent illness with nutrition for living a healthy life.",
    image: banner3,
  },
];

const ImageCarousel = () => {
  return (
    <div className="flex ">
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        useKeyboardArrows={true}
        showIndicators={false}
        dynamicHeight={false}
      >
        {slider.map((items, index) => (
          <div
            key={index}
            className="   relative bg-cover  bg-no-repeat md:bg-contain bg-opacity-65 brightness-75 "
          >
            <img
              src={items.image}
              alt={items.description}
              className="object-contain "
            />
            <div className="absolute top-[30%] md:top-[60%] xl:top-[50%] lg:ml-10 xl:ml-[190px] brightness-150 ">
              <h3 className="text-amber-600 italic text-lg md:text-[50px] font-extrabold ">
                {items.title}
              </h3>
              <p className="hidden md:block mt-5 mb-5 md:text-[35px] font-bold text-green-600">
                {items.description}
              </p>
              <p className="hidden md:block text-lg  text-white font-extrabold">
                {items.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

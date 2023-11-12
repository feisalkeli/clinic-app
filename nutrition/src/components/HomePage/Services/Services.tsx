import React from "react";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <section className="w-full md:p-[80px] mb-10">
      <div className="flex flex-col   justify-center ">
        <div className=" text-center">
          <p className="italic text-2xl text-amber-600 font-extrabold">
            What We Offer
          </p>
          <p className="text-[45px]">
            We Provide best <span className="font-extrabold">services</span>
          </p>
          <p className="font-thin">
            We connect buyers and sellers to natural, organic, environmentally
            sound products.
          </p>
          <p className="font-thin">
            We find the best suppliers and makers of natural and organic
            products.
          </p>
        </div>
        <div className="p-4">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Services;

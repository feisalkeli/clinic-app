import React from "react";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h3 className="italic font-extrabold text-amber-600 text-xl md:text-[40px] mb-1 md:mb-6">
            Our Pricing Plans
          </h3>
          <h3 className=" text-2xl md:text-[45px] mb-5">
            Choose your <span className="font-extrabold">best offer</span>
          </h3>
          <p className="font-extrabold text-green-900 text-sm md:text-lg max-w-[400px] md:max-w-[700px]  mt-4">
            We connect buyers and sellers of natural, organic, environmentally
            sound products. <br />
            We find the best suppliers and makers of natural and organic
            products
          </p>
        </div>

        <div className="mt-12">
          <PricingCards />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

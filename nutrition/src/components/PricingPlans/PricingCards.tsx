import React from "react";

const PricingCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Basic Plan Card */}
      <div className="rounded-[30px] shadow-2xl border border-solid w-[300px] h-[500px] mb-5">
        <div className="text-center ">
          <div className="bg-lime-900 h-[140px] rounded-sm">
            <div className="absolute mt-7 ml-[110px]">
              <p className="italic text-amber-600 font-extrabold text-[20px]">
                Basic Plan
              </p>
              <p className="text-2xl mt-4 font-extrabold">
                <span className="text-5xl">$</span>500
              </p>
            </div>
          </div>
          {/* Price Description Card */}
          <div className="mt-9">
            <p className="mb">Fitness & Perfomance </p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Physical Activity</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Nutrition Strategies</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Diet Recommendation</p>
          </div>
          {/* Button */}
          <div className="mt-10 ">
            <button className="bg-lime-900 p-3  rounded-full hover:bg-amber-600">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      {/* Premium Plan Card */}
      <div className="rounded-[30px] shadow-2xl border border-solid w-[300px] h-[500px] mb-5">
        <div className="text-center ">
          <div className="bg-lime-900 h-[140px] rounded-sm">
            <div className="absolute mt-7 ml-[90px]">
              <p className="italic text-amber-600 font-extrabold text-[20px]">
                Premium Plan
              </p>
              <p className="text-2xl mt-4 font-extrabold">
                <span className="text-5xl">$</span>500
              </p>
            </div>
          </div>
          {/* Price Description Card */}
          <div className="mt-9">
            <p className="mb">Fitness & Perfomance </p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Physical Activity</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Nutrition Strategies</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Diet Recommendation</p>
          </div>
          {/* Button */}
          <div className="mt-10 ">
            <button className="bg-lime-900 p-3  rounded-full hover:bg-amber-600">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="rounded-[30px] shadow-2xl border border-solid w-[300px] h-[500px] mb-5">
        <div className="text-center ">
          <div className="bg-lime-900 h-[140px] rounded-sm">
            <div className="absolute mt-7 ml-[90px]">
              <p className="italic text-amber-600 font-extrabold text-[20px]">
                Standard Plan
              </p>
              <p className="text-2xl mt-4 font-extrabold">
                <span className="text-5xl">$</span>500
              </p>
            </div>
          </div>
          {/* Price Description Card */}
          <div className="mt-9">
            <p className="mb">Fitness & Perfomance </p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Physical Activity</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Nutrition Strategies</p>
            <div className="border border-dashed ml-6 mr-6"></div>
            <p className="mt-4">Diet Recommendation</p>
          </div>
          {/* Button */}
          <div className="mt-10 ">
            <button className="bg-lime-900 p-3  rounded-full hover:bg-amber-600">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

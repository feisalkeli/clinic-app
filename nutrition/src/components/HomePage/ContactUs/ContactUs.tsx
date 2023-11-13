import React from "react";
import background from "../../../assets/img/bg/bg-04.jpg";

const ContactUs = () => {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <section style={sectionStyle} className="h-[370px] brightness-25   z-10">
      <div className="mt-[] flex flex-col justify-center items-center">
        <p className=" mt-10 italic  text-amber-600 font-extrabold text-2xl">
          Healthy Food, For Breakfast
        </p>
        <p className=" mt-10 text-lg md:text-5xl max-w-[650px] font-extrabold">
          Healthy and Tasty Foods <br /> with natural Ingredients
        </p>

        <button
          type="button"
          className="mt-10 bg-amber-600  rounded-full p-3 hover:bg-emerald-900 transition-duration-5000"
        >
          {" "}
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactUs;

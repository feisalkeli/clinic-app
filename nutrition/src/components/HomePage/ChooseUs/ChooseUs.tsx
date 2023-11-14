import React from "react";

import background from "../../../assets/img/bg/bg-01.jpg";
import banner from "../../../assets/img/content/why-us.jpg";
import Accordion from "./Accordion";

const ChooseUs = () => {
  const styles = {
    background: `linear-gradient(rgba(0, 0, 0, 2.0), rgba(0, 0, 0, 0.2)),url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <section className="w-full  h-[1100px] md:h-[500px] mb-[]" style={styles}>
      <div className="flex flex-col md:flex-row justify-center p-9 gap-10">
        <div>
          <h3 className="text-amber-600 italic text-3xl mb-3">Why choose us</h3>
          <h3 className="text-white text-3xl">
            Explore <span className=" font-extrabold">best offer</span> for you
          </h3>
          <img
            src={banner}
            alt=""
            className="h-[200px] mt-12 object-contain overflow-hidden rounded-lg"
          />
          <div className="flex flex-col md:flex-row md:max-w-[350px] mt-9 text-white gap-3">
            <i className="fa fa-check flex ">
              <p className="ml-2">Nutritional Assesment</p>
            </i>
            <i className="fa fa-check flex ">
              <p className="ml-2">Weight Assesment</p>
            </i>{" "}
            <i className="fa fa-check flex ">
              <p className="ml-2">Physical Activities</p>
            </i>{" "}
            <i className="fa fa-check flex ">
              <p className="ml-2">Healthy Life</p>
            </i>{" "}
            {/* <i className="fa fa-check flex ">
              <p className="ml-2">Nutritional Assesment</p>
            </i> */}
          </div>
        </div>
        <div className=" max-w-[450px] lg:max-w-[500px] md:mt-10 ">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

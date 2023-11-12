import React from "react";

import partner1 from "../../../assets/img/partners/01.png";
import partner2 from "../../../assets/img/partners/02.png";
import partner3 from "../../../assets/img/partners/03.png";
import partner4 from "../../../assets/img/partners/04.png";
import partner5 from "../../../assets/img/partners/05.png";
import partner6 from "../../../assets/img/partners/06.png";
import partner7 from "../../../assets/img/partners/07.png";
import partner8 from "../../../assets/img/partners/08.png";
import ImageCard from "./ImageCard";

const images = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];

/**
 *Renders the partner images by mapping over them
 *
 * @return {*}
 */
const Partners = () => {
  return (
    <section className=" mt-[50px] md:mt-[130px] ">
      <div className=" flex justify-center items-center mb-10">
        <p className="text-[30px] font-bold">
          Our <span className="text-amber-600">Partners</span>{" "}
        </p>
      </div>
      <div className="flex  items-center overflow-hidden">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Partners;

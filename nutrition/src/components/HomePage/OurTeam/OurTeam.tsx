import React from "react";
import Doctors from "./Doctors";
import image1 from "../../../assets//img/team/01.jpg";
import image2 from "../../../assets//img/team/02.jpg";
import image3 from "../../../assets//img/team/03.jpg";
import image4 from "../../../assets//img/team/04.jpg";

/**
 *Renders the Team Description and also contains our team card 
 component that displays the team names
 *
 * @return {*}
 */
const OurTeam = () => {
  let ourTeam = [
    {
      name: "Percy Rouse",
      speciality: "Diet & Nutrition",
      image: image1,
    },
    {
      name: "Luca Bullen",
      speciality: "Executive officer",
      image: image2,
    },
    {
      name: "Laura Ash",
      speciality: "General Nutrition",
      image: image3,
    },
    { name: "Julia Conley", speciality: "General Dietician", image: image4 },
  ];
  return (
    <section className="w-full p-10">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <p className="font-extrabold text-amber-600 italic text-[30px] mb-8">
            Diet + nutrition experts
          </p>
          <p className="text-[40px] mb-5">
            <span className="font-extrabold text-[40px]">Expert team </span>
            members
          </p>
          <p className="text-lg">
            We connect buyers and sellers of natural, organic, environmentally
            sound products. <br /> We find the best suppliers and makers of
            natural and organic products.
          </p>
        </div>
        {/* Team Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-12">
          {ourTeam.map((team, index) => (
            <div key={index}>
              <Doctors team={team} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

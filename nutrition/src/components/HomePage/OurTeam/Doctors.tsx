import React from "react";

interface DoctorsComponentProps {
  team: {
    name: string;
    speciality: string;
    image: string;
  };
}

const Doctors: React.FC<DoctorsComponentProps> = ({ team }) => {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-2xl  ">
        <div className="rounded-full mb-[] ">
          <div className="mb-5 flex justify-center">
            <img
              src={team.image}
              alt="Doctor Images"
              className="rounded-full overflow-hidden w-[200px] lg:w-[400px] mt-5"
            />
          </div>
          <div className="">
            <p className="text-center mb-5 text-amber-600 font-extrabold">
              {team.name}
            </p>
            <p className="text-center mb-5 font-semibold">{team.speciality}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;

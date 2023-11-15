import React from "react";
interface CardsProps {
  card: {
    title: string;
    description: string;
    logo: string;
    image: string;
  };
}
const Cards: React.FC<CardsProps> = ({ card }) => {
  return (
    <>
      <div className="max-w-[500px] rounded-lg bg-white mt-[120px] shadow-xl md:transition-transform transform hover:scale-110 hover:ease-in-out ">
        <div className="">
          <div>
            <img
              src={card.image}
              alt={card.title}
              className="mb-10 rounded-lg"
            />
          </div>
          <div className="absolute left-5 botoom-2">
            <img src={card.logo} alt="logo" className="object-contain " />
          </div>

          <div className=" h-[150px] flex flex-col items-center ">
            <h3 className="mb-3 font-extrabold">{card.title}</h3>
            <p className=" max-w-[300px] text-center">{card.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

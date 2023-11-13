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
      <div className="max-w-[400px] rounded-lg bg-white mt-[120px] shadow-xl">
        <img src={card.image} alt={card.title} className="mb-10 rounded-lg" />
        {/* <img src={card.logo} alt={card.title} className="h-[340px] w-[10px]" /> */}

        <div className=" h-[150px] flex flex-col justify-start">
          <h3>{card.title}</h3>
          <p className="">{card.description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;

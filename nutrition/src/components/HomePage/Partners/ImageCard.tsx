import React from "react";
import "./ImageCard.css";
interface ImageCardProps {
  image: string;
  index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index }) => {
  return (
    <div key={index} className=" flex animate-marquee">
      <img src={image} alt="imageCard" />
    </div>
  );
};

export default ImageCard;

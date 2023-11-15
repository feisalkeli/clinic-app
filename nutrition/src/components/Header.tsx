import React, { useEffect } from "react";
import { HeaderComponentProps } from "./index";
import "font-awesome/css/font-awesome.min.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

/**
 *
 *
 * @return {*}
 */
const Header: React.FC<HeaderComponentProps> = ({
  Home,
  AboutUs,
  ContactUs,
  OurTeam,
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll

  const handleScroll = () => {
    const currentscrollPosition = window.scrollY;
    setIsVisible(
      (prevScrollPos < currentscrollPosition &&
        prevScrollPos - currentscrollPosition > 70) ||
        currentscrollPosition < 10
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible, handleScroll]);
  return (
    <nav
      className={`flex justify-center items-center fixed z-10 p-4 w-full bg-transparent ${
        isVisible ? "0" : "-60px"
      }`}
    >
      <div className="flex justify-end flex-1 ">
        <div className=" flex  justify-end hidden md:block text-white font-bold ">
          <ul className="flex justify-between gap-4 items-center">
            <li>
              {" "}
              <a href="">{Home}</a>
            </li>
            <li>
              {" "}
              <a href="">{AboutUs}</a>
            </li>
            <li>
              {" "}
              <a href="">{OurTeam}</a>
            </li>
            <li>
              <a href="">{ContactUs}</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Logo */}

        <div className="  block md:hidden" id="navbar-logo">
          <i className="fa fa-lg fa-bars"></i>
        </div>
        {/* <div id="navbar-modal" className="text-white">
          <ul className="flex flex-col justify-between gap-4 items-center">
            <li>
              {" "}
              <a href="">{Home}</a>
            </li>
            <li>
              {" "}
              <a href="">{AboutUs}</a>
            </li>
            <li>
              {" "}
              <a href="">{OurTeam}</a>
            </li>
            <li>
              <a href="">{ContactUs}</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;

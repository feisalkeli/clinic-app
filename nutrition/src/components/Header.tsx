import React from "react";
import { HeaderComponentProps } from "./index";
import "font-awesome/css/font-awesome.min.css";

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
  return (
    <nav className="flex justify-center items-center fixed  z-10 p-4 w-full">
      <div className="flex flex-1 justify-between">
        {/* Image Logo */}
        <div className="">
          <img src="../assets/img/logos/logo.png" alt="image_logo" />
        </div>
        <div className="  justify-end hidden md:block text-white font-bold ">
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

        <div className="block md:hidden">
          <i className="fa fa-lg fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;

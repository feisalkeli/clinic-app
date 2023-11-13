import React from "react";

/**
 *Footer section
 *
 * @return {*}
 */
const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-950 p-3 md:p-[80px] lg:p-[100px]">
        <div className="flex flex-1 justify-between mt-3 flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <img
              src="../assets/img/logos/footer-light-logo.png"
              alt="footer logo"
              className="object-contain"
            />
            <p className="text-white max-w-[500px] md:max-w-[400px]">
              We have been most trusted health care nutrition for 25 years. We
              glad for our rich history for nutritionists organizations.
            </p>

            <input
              type="text"
              id="email"
              placeholder="Subscribe With Us"
              className="h-12 rounded-md mt-4"
            />
            <label htmlFor="email" typeof="text"></label>
          </div>
          {/* Qick Link */}
          <div className="flex flex-col">
            <div className="">
              <h3 className="italic text-amber-400 mb-2 font-bold text-xl flex">
                Quick Links
              </h3>
              <i className="fa fa fa-angle-right flex mb-2 ">
                {" "}
                <h3 className="text-white mb-2 ml-2 hover:text-amber-400 cursor-pointer ">
                  About Us
                </h3>
              </i>
              <i className="fa fa fa-angle-right flex mb-2">
                {" "}
                <h3 className="text-white mb-2 ml-2  hover:text-amber-400 cursor-pointer ">
                  Our Team
                </h3>
              </i>{" "}
              <i className="fa fa-angle-right flex mb-2">
                {" "}
                <h3 className="text-white mb-2 ml-2  hover:text-amber-400 cursor-pointer ">
                  Blog
                </h3>
              </i>{" "}
              <i className="fa fa-angle-right flex">
                {" "}
                <h3 className="text-white mb-2 ml-2  hover:text-amber-400 cursor-pointer ">
                  Contact Us
                </h3>
              </i>
            </div>
          </div>
          {/* Services */}
          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="italic text-amber-400 mb-2 font-bold text-xl">
                Services
              </h3>
            </div>
            <div className=" flex gap-5">
              <img src="../../assets/img/content/support-motivation-02.jpg" />
              <p className="max-w-[200px] text-white mb-6">
                What I wish everyone knew about exercise.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

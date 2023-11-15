import aboutImage from "../../assets/img/content/about-01.jpg";
import aboutImage2 from "../../assets/img/content/about-06.jpg";
import icon1 from "../../assets/img/icons/icon-19.png";
import icon2 from "../../assets/img/icons/icon-18.png";
const AboutUs = () => {
  return (
    <section className="w-full p-[40px] md:[80px]  ">
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center ">
        <div className="flex relative " data-aos="fade-up-right">
          <img src={aboutImage} alt="" className="rounded-full " />
          <div className="absolute   hidden md:block">
            <img
              src={aboutImage2}
              alt=""
              className="rounded-full h-auto md:h-[120px] lg:h-[190px] "
            />
          </div>
        </div>
        <div className=" ml-8  ">
          <div className="w-full">
            <p className="text-3xl w-full font-semibold mb-10">
              We advise you to{" "}
              <span className="font-extrabold">prevent disease</span> with
              nutrition
            </p>
            <p className="italic text-amber-600 text-lg mb-10 font-extrabold">
              We have 20 years of nutrition and fitness health experience
              globaly, work with professionals
            </p>
            <p className="font-medium max-w-[700px] mb-[80px]">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humor or random word that donor send minimum take minute some
              lorem ipsum text which don't look even.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex gap-6 items-center max-w-[200px] ">
              <img src={icon2} alt="" />
              <p className="">Personalized Nutrition Plan</p>
            </div>
            <div className=" flex gap-6 items-center  max-w-[200px]  ml-2 md:ml-9">
              <img src={icon1} alt="" />
              <p className="max-w-[200px]">Personalized Exersice Plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

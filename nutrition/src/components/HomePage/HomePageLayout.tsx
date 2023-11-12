import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel/Carousel";
import Carousel from "./Carousel/Carousel";
import Partners from "./Partners/Partners";
import Services from "./Services/Services";

/**
 *Responsible for rendering the Home Layout Components
 *
 * @return {*}
 */
const HomePageLayout = () => {
  return (
    <div>
      <ImageCarousel />
      <Partners />
      <AboutUs />
      <Services />
    </div>
  );
};

export default HomePageLayout;

import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel/Carousel";
import Carousel from "./Carousel/Carousel";
import Partners from "./Partners/Partners";

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
    </div>
  );
};

export default HomePageLayout;

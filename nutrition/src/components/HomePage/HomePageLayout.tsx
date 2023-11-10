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
    </div>
  );
};

export default HomePageLayout;

import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel/Carousel";
import Carousel from "./Carousel/Carousel";
import Partners from "./Partners/Partners";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import OurTeam from "./OurTeam/OurTeam";
import Pricing from "../PricingPlans/Pricing";
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
      <ContactUs />
      <OurTeam />
      <Pricing />
    </div>
  );
};

export default HomePageLayout;

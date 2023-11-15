import AboutUs from "./AboutUs";
import ImageCarousel from "./Carousel/Carousel";

import Partners from "./Partners/Partners";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import OurTeam from "./OurTeam/OurTeam";
import Pricing from "./PricingPlans/Pricing";
import ChooseUs from "./ChooseUs/ChooseUs";
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
      <ChooseUs />
    </div>
  );
};

export default HomePageLayout;

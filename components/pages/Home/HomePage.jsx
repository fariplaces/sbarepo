import WhyChooseUsArea from "@/components/common/WhyChooseUsArea";
import OurPartnerArea from "./OurPartnerArea";
import AboutArea from "./AboutArea";
import HeroArea from "./HeroArea";  

import PortfolioArea from "./PortfolioArea";
import ServiceArea from "./ServiceArea";
import TestimonialArea from "@/components/common/TestimonialArea";
import NewsLatterArea from "./NewsLatterArea";
import LetsTalkArea from "@/components/common/LetsTalkArea";
import WhatWeDoArea from "./WhatWeDoArea";

function HomePage() {
  return (
    <>
      <HeroArea />
    
      <WhatWeDoArea />
     
      {/* <ServiceArea /> */}
      {/* <OurPartnerArea /> */}
      <AboutArea black="black" light="dark" />
      
      <PortfolioArea black="black" />
  
      <WhyChooseUsArea black="black" lable="" />
     
      {/* <TestimonialArea /> */}
      <NewsLatterArea black="black" />
    
      <LetsTalkArea />
 
     
    </>
  );
}

export default HomePage;

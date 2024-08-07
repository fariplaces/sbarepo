import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import HowWeWorkArea from "../service/HowWeWorkArea";
import ServicePrice from "./ServicePrice";
import WhatWeDoArea from "./WhatWeDoArea";
import PriceBox from "./PriceBox";

function ServicesPage() {
  return (
    <>
      <Breadcrumb pageName="Service" />
      <WhatWeDoArea />
      <HowWeWorkArea />
      <ServicePrice />
      <LetsTalkArea />
      <PriceBox/>
    </>
  );
}

export default ServicesPage;

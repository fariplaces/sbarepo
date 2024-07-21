import React from "react";
// import Link from "next/link";
// import { SRLWrapper } from "simple-react-lightbox";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Navigation } from "swiper";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

// Import CSS files from swiper
import 'swiper/css'; // This imports all swiper styles
import 'swiper/css/navigation'; // Specific styles for navigation module

SwiperCore.use([Navigation, Autoplay]);

function PortfolioArea(props) {
  const portfolioSlider = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      992: { slidesPerView: 4, spaceBetween: 40 },
      1400: { slidesPerView: 5, spaceBetween: 40 },
    },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SRLWrapper>
      <div className="portfolio-area sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-xl-5">
              <div className={`title ${props.black}`}>
                <span> NEWS ROOM</span>
                <h2>LATEST BLOG FROM WATCH SECURITY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper portfolio-slider">
          <Swiper
            {...portfolioSlider}
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              {/* Your portfolio slide content */}
            </SwiperSlide>
            {/* Add more SwiperSlide components for additional slides */}
          </Swiper>
          <div className="swiper-pagination" />
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default PortfolioArea;

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Configure Swiper to use modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

function HeroArea() {
  const HeroSlider = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000, // 5 seconds delay between slides
      disableOnInteraction: false, // continue autoplay even when user interacts with slides
    },
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable: true,
      type: "bullets",
    },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-area">
      <div className="swiper hero-slider">
        <Swiper {...HeroSlider}>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="hero-content-wrapper">
                    <div className="hero-content-wrap">
                      <div className="hero-content-img">
                        <img src="/images/hero1.jpg" alt="Hero 1" />
                      </div>
                      <div className="hero-content">
                        <h2>Creative</h2>
                        <h1>
                          Home & Commercial Building <span>Security Services</span>
                        </h1>
                        <p>
                          Welcome to Watch Security Limited, the experts in electronic security systems and electric gates installation across the UK!
                        </p>
                        <Link href="/about" passHref>
                          <span className="about-btn" onClick={scrollTop}>About us</span>
                        </Link>
                        <Link href="/project-details" passHref>
                          <span className="work-btn" onClick={scrollTop}>View Services</span>
                        </Link>
                        <div className="slider-num">
                          <span>01</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="hero-content-wrapper">
                    <div className="hero-content-wrap">
                      <div className="hero-content-img">
                        <img src="/images/hero2.png" alt="Hero 2" />
                      </div>
                      <div className="hero-content">
                        <h2>Creative</h2>
                        <h1>
                          Home & Commercial Building <span>Security Services</span>
                        </h1>
                        <p>
                          Welcome to Watch Security Limited, the experts in electronic security systems and electric gates installation across the UK!
                        </p>
                        <Link href="/about" passHref>
                          <span className="about-btn" onClick={scrollTop}>About us</span>
                        </Link>
                        <Link href="/project-details" passHref>
                          <span className="work-btn" onClick={scrollTop}>View Services</span>
                        </Link>
                        <div className="slider-num">
                          <span>02</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="hero-content-wrapper">
                    <div className="hero-content-wrap">
                      <div className="hero-content-img">
                        <img src="/images/aboutt.png" alt="Hero 3" />
                      </div>
                      <div className="hero-content">
                        <h2>Creative</h2>
                        <h1>
                          Home & Commercial Building <span>Security Services</span>
                        </h1>
                        <p>
                          Welcome to Watch Security Limited, the experts in electronic security systems and electric gates installation across the UK!
                        </p>
                        <Link href="/about" passHref>
                          <span className="about-btn" onClick={scrollTop}>About us</span>
                        </Link>
                        <Link href="/project-details" passHref>
                          <span className="work-btn" onClick={scrollTop}>View Services</span>
                        </Link>
                        <div className="slider-num">
                          <span>03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="social-media">
        <ul className="social-list">
          <li>
            <a rel="noopener noreferrer" href="https://www.facebook.com/">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://www.instagram.com/">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeroArea;

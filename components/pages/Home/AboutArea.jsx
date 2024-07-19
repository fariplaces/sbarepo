import React from "react";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

function AboutArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Singlepercentage = 85;
  const singleXmPercentage = 68;
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title black">
                  <span>About us</span>
                  <h2 className="mb-15">Direction with our company.</h2>
                </div>
                <p>
                  Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. Classe aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent nec neque at
                  dolor venenatis consectetur eu quis ei Donec lacinia placerat
                  felis non aliquam.Integer purus odio.
                </p>
                <div className="our-mission">
                  <div className="msn-icon">
                    <i>
                      <img
                        src={
                          
                          "/images/icons/mission-icon.png"
                        }
                        alt="images"
                      />
                    </i>
                  </div>
                  <div className="msn-content">
                    <h5>Our Mission</h5>
                    <p>
                      Integer purus odio, placerat nec rhoni olor Class online
                      and video.
                    </p>
                  </div>
                  <div className="cto">
                    <img
                      src={ "/images/ctoFounder.png"}
                      alt="imgs"
                    />
                  </div>
                </div>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} href={`/about`}>About more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="group-images">
                  <img
                    src={ "/images/about-bottom.jpg"}
                    alt="images"
                  />
                  <div className="about-top">
                    <img
                      src={ "/images/about-top.png"}
                      alt="images"
                    />
                  </div>
                  <div className="about-skills">
                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>web</h6>
                        <p>Clean Design</p>
                      </div>
                    </div>
                    <div className="signle-skill xsm">
                      <CircularProgressbar
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>App</h6>
                        <p>Developing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-count">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-1.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={250} delay={2} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-2.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={1} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={ "/images/icons/count-3.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={3} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Expert Teams</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count xsm">
                  <i>
                    <img
                      src={ "/images/icons/count-4.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={4} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutArea;

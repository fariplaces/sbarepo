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
    <section className="about-area sec-mar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="about-left">
              <div className="title black">
                <span>About us</span>
                <h2 className="mb-15">
                  At Watch Security, we understand that every property and business is unique.
                </h2>
              </div>
              <p>
                At Watch Security, we understand that every property and business is unique. That’s why we take a
                personalised approach to security, working closely with our clients to assess their requirements and
                design customised solutions that address their specific concerns. Whether it’s installing
                state-of-the-art CCTV systems, access control solutions, or intruder alarms, we have the expertise to
                deliver reliable and effective security measures. We pride ourselves on our commitment to customer
                satisfaction. Our team of engineers is not only highly skilled but also dedicated to providing
                exceptional service. We believe in building long-term relationships with our clients, offering ongoing
                support, maintenance, and monitoring services to ensure that their security systems operate optimally at
                all times. At Watch Security, we stay at the forefront of technological advancements in the security
                industry. By partnering with leading manufacturers, we offer cutting-edge solutions that integrate
                seamlessly into our clients’ properties, providing them with advanced security features and remote
                monitoring capabilities.
              </p>
              <div className="our-mission">
                <div className="msn-icon">
                  <i>
                    <img src="/images/about1.png" alt="images" />
                  </i>
                </div>
                <div className="msn-content w-full">
                  <h5>Our Specialties</h5>
                  <div className="flex justify-between">
                    <div>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>Trusted Security</li>
                      </ul>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>Quality Services</li>
                      </ul>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>Smart Systems</li>
                      </ul>
                    </div>
                    <div>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>Control Room</li>
                      </ul>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>Always Honest</li>
                      </ul>
                      <ul
                        style={{
                          listStyleType: "circle",
                          paddingLeft: "0",
                          paddingInlineStart: "1.5em",
                        }}
                      >
                        <li>24/7 Hours Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cto"></div>
              </div>
              <div className="cmn-btn">
                <Link href="/about" passHref onClick={scrollTop}>
                  About more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="about-right">
              <div className="group-images">
                <img src="/images/about3.png" alt="images" />
                <div className="about-top">
                  {/* <img src="/images/about.jpg" alt="images" /> */}
                </div>
                <div className="about-skills">
                  <div className="signle-skill">
                    <CircularProgressbar
                      value={Singlepercentage}
                      text={`${Singlepercentage}%`}
                      className="progress-bar-circle"
                    />
                    <div className="skill-content">
                      {/* <h6>web</h6>
                      <p>Clean Design</p> */}
                    </div>
                  </div>
                  <div className="signle-skill xsm">
                    <CircularProgressbar
                      value={singleXmPercentage}
                      text={`${singleXmPercentage}%`}
                      className="progress-bar-circle"
                    />
                    <div className="skill-content">
                      {/* <h6>App</h6>
                      <p>Developing</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="pricing-plan sec-mar">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6 col-xl-5 or1">
            <div class="title black"><span>our Focus</span>
              <h2>We always Focus on</h2>
            </div>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="row g-4">
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>Home Security</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Experience Tranquility at Home: Elevate Security with Advanced Home
                      Protection Solutions</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>Access Control</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Empower Access Control: Fortify Your Spaces with State-of-the-Art
                      Security Solutions</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>24/7 Support</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Reliable 24/7 Support Around the Clock: Providing Assurance and
                      Peace of Mind in Critical Moments.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="row g-4">
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>Home Security</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Experience Tranquility at Home: Elevate Security with Advanced Home
                      Protection Solutions</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>Access Control</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Empower Access Control: Fortify Your Spaces with State-of-the-Art
                      Security Solutions</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="single-price-box">
                  <h3>24/7 Support</h3><span></span>
                  <ul class="feature-list">
                    <li><i class="fas fa-check"></i>Reliable 24/7 Support Around the Clock: Providing Assurance and
                      Peace of Mind in Critical Moments.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <div className="features-count">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <div className="single-count">
                <i>
                  <img src="/images/icons/count-1.png" alt="images" />
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
                  <img src="/images/icons/count-2.png" alt="images" />
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
                  <img src="/images/icons/count-3.png" alt="images" />
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
                  <img src="/images/icons/count-4.png" alt="images" />
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
  );
}

export default AboutArea;

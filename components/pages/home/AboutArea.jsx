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
                <h2 className="mb-15">   WE'RE QUALIFIED & PROFESSIONAL</h2>
              </div>
              <p>
                At Watch Security, we understand that every property and business is unique. That’s why we take a personalised approach to security, working closely with our clients to assess their requirements and design customised solutions that address their specific concerns. Whether it’s installing state-of-the-art CCTV systems, access control solutions, or intruder alarms, we have the expertise to deliver reliable and effective security measures.

                We pride ourselves on our commitment to customer satisfaction. Our team of engineers is not only highly skilled but also dedicated to providing exceptional service. We believe in building long-term relationships with our clients, offering ongoing support, maintenance, and monitoring services to ensure that their security systems operate optimally at all times.

                At Watch Security, we stay at the forefront of technological advancements in the security industry. By partnering with leading manufacturers, we offer cutting-edge solutions that integrate seamlessly into our clients’ properties, providing them with advanced security features and remote monitoring capabilities.
              </p>
              <div className="our-mission">
                <div className="msn-icon">
                  <i>
                    <img
                      src="/images/about1.png"
                      alt="images"
                    />
                  </i>
                </div>
                <div className="msn-content">
                  <h5>Our Specialties</h5>
                  
                  <span>Trusted Security</span> <br />
                  <span>Control Room</span> <br />
                  <span>Quality Services</span> <br />
                  <span>24/7 Hours Support</span> <br />
                
                </div>
                <div className="cto">
                  {/* <img src="/images/ctoFounder.png" alt="imgs" /> */}
                </div>
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
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 col-xl-3">
              <div class="office-info">
                <div class="icon"><img src="images/tiknow.png" alt="icon" class="m-auto h-20 bottom-0" /></div>
                <h4>Secure Your Premises with Confidence</h4>
                <p>No matter where your business is located, our nationwide coverage ensures that you can benefit from
                  our exceptional services. Our team of highly skilled professionals is ready to assist you in securing
                  your premises, no matter the size or location.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-3">
              <div class="office-info">
                <div class="icon"><img src="images/tiknow.png" alt="icon" class="m-auto h-20 bottom-0" /></div>
                <h4>Award-Winning Expertise You Can Rely On</h4>
                <p>With years of experience and a strong reputation in the industry, Watch Security has become a trusted
                  name for electronic security solutions. Our team consists of in-house experts who are dedicated to
                  delivering top-quality installations and superior customer service.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-3">
              <div class="office-info">
                <div class="icon"><img src="images/tiknow.png" alt="icon" class="m-auto h-20 bottom-0" /></div>
                <h4>Your Safety is Our Priority</h4>
                <p>We understand the importance of safety and compliance. That&#x27;s why Watch Security is fully
                  insured up to £5 million and holds safety accreditations from CHAS, Safe Contractor, PQS Approved, and
                  Gate Safe. You can have peace of mind knowing that your security needs are being handled by
                  professionals who prioritize safety.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-3">
              <div class="office-info">
                <div class="icon"><img src="images/tiknow.png" alt="icon" class="m-auto h-20 bottom-0" /></div>
                <h4>Customer Satisfaction at its Best</h4>
                <p>We take pride in our 5-star reviews from satisfied customers who have experienced the reliability and
                  effectiveness of our security solutions. Trust us to provide you with the highest level of service and
                  protect what matters most to you.</p>
              </div>
            </div>
          </div>
        </div>
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

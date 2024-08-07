import React from "react";
import Link from "next/link";
function ServiceDetailsWrapper() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="service-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 col-xl-8 or2">
              <div className="signle-service-details">
                <h3>
                  <img
                    src={
                      
                      "/images/icons/service-details-icon.svg"
                    }
                    alt="images"
                  />
                About My Services
                </h3>
                <p>
                At Watch Security, we understand that access control is the first line of defense. Elevate your security with our innovative solutions seamlessly integrating into your existing infrastructure. Contact Us to discuss how our access control systems can enhance the security of your premises.
Enhanced Security Through Smart Technology
Restriction of Unauthorized Access
Improved Employee Accountability

OurAccess Control Services Include

eyless Entry
Embrace the future of security with keyless entry options, enhancing convenience and eliminating the risks associated with traditional keys.

Biometric Scanners
Ensure secure access with our biometric scanners, utilizing fingerprint or facial recognition technology for accurate and reliable identification.

Time and Attendance Tracking
Efficiently manage employee access and attendance with integrated systems that enhance security and streamline administrative processes.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 or1">
              <div className="sidebar-search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Here"
                  />
                  <button type="submit">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div>
              <div className="sidebar-widget">
                <h4>Services</h4>
                <ul className="service-list">
                  <li>
                    <Link
                       onClick={scrollTop}
                       href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Maintanance <span>(15)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       onClick={scrollTop}
                       href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Gates & Barriers <span>(18)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      CCTV <span>(21)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                     Inturder Alarms <span>(25)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Access Control <span>(29)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       onClick={scrollTop}
                       href={`/service-details`} passHref>
                      <i>
                        <img
                          src={
                            
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Automatic Electric Gates <span>(31)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="single-service-work-process">
            <h3> maintanance</h3>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>01</span>
                    </div>
                    <h4>Our Maintenance  &amp; services</h4>
                    <p>
                    Maintenance
At Watch Security, we offer a complete suite of services encompassing full assessment, installation, maintenance, and repair for domestic and commercial systems. Recognizing maintenance's critical role in preventing injury or death in fire situations. We urge everyone to ensure their fire alarm systems meet the relevant regulations and undergo regular maintenance.

Home Security,
24/7 Support,
Access Control,
Emergency Lighting.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={ "/images/cctv.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div className="step-img">
                    <img
                      src={ "/images/newestpost.png"}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="col-md-8 col-xl-8">
                  <div className="step">
                    <div className="step-count">
                      <span>02</span>
                    </div>
                    <h4>Our Gates and barriers services</h4>
                    <p>
                    Professional consultation to assess the property's security needs and recommend suitable electric gate and barrier solutions. Site evaluation to determine the most effective placement and type of gate or barrier.Expert installation of electric gates and barriers, including all necessary components such as motors, sensors, control panels, and access devices. Customization of gates and barriers to fit the property's aesthetic and functional requirements.Automation of gate and barrier systems for remote operation via keypads, remote controls, or smartphone applications. Integration with access control systems, intercoms, security cameras, and other security features for comprehensive control and monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>03</span>
                    </div>
                    <h4>Our Fire Alarm Systems  &amp; Services</h4>
                    <p>
                    Benefit from state-of-the-art fire detection technology for early identification of potential hazards.Receive instant alerts through our alarm notification systems, ensuring swift response in critical situations.Seamlessly connect your fire alarm systems with emergency services for a coordinated and rapid response.Rest assured that our fire alarm systems meet and exceed the latest safety regulations, ensuring your premises are fully compliant.Choose Watch Security for Fire Alarm Systems that prioritize safety and peace of mind. Our solutions are tailored to meet the highest safety standards, safeguarding your property and those within it. [Contact Us] to discuss how our Fire Alarm Systems can enhance the safety measures of your premises.
Detect fire hazards at the earliest stage, preventing escalation.
Our efficient alarm notification systems ensure a rapid response to emergencies.
Stay compliant with safety standards, providing a secure environment for occupants.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={ "/images/fire.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailsWrapper;

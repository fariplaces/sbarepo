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
            <h3>How We Work in our services</h3>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>01</span>
                    </div>
                    <h4>Wireframe &amp; Design</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      Vestibulum tempor tristique neque non pretium. Etiam leo
                      risus, consectetur sagittis ullamcorper scelerisque,
                      blandit vitae sem.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={ "/images/step-1.png"}
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
                      src={ "/images/step-2.jpg"}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="col-md-8 col-xl-8">
                  <div className="step">
                    <div className="step-count">
                      <span>02</span>
                    </div>
                    <h4>Developing</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      Vestibulum tempor tristique neque non pretium. Etiam leo
                      risus, consectetur sagittis ullamcorper scelerisque,
                      blandit vitae sem.
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
                    <h4>Checkup &amp; Launch</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                      Vestibulum tempor tristique neque non pretium. Etiam leo
                      risus, consectetur sagittis ullamcorper scelerisque,
                      blandit vitae sem.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={ "/images/step-3.jpg"}
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

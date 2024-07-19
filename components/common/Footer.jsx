"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link onClick={scrollTop} href={"#"}>
                  <img
                    src={"/images/logo.png"}
                    // src={process.env.PUBLIC_URL + "/images/logo.png"}
                    alt="img"
                  />
                </Link>
              </div>
              <address>
                <h4>Office</h4>
                <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
              </address>
              <ul className="social-media-icons">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.twitter.com/"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.pinterest.com/"
                  >
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="footer-widget">
              <h4>Our Services</h4>
              <ul className="footer-menu">
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    Strategy &amp; Research
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    Web Solution
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    Digital Merketing
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    App Design
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service-details`}
                  >
                    App Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="footer-widget">
              <h4>Company</h4>
              <ul className="footer-menu">
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/about`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/project`}
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/blog`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/contact`}
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollTop}
                    href={`/service`}
                  >
                    Pricing Plan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="footer-widget">
              <h4>Contacts</h4>
              <div className="number">
                <div className="num-icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="phone">
                  <a rel="noopener noreferrer" href="tel:05661111985">
                    +880 566 1111 985
                  </a>
                  <a rel="noopener noreferrer" href="tel:06571111576">
                    +880 657 1111 576
                  </a>
                </div>
              </div>
              <div className="office-mail">
                <div className="mail-icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="email">
                  <a rel="noopener noreferrer" href="mailto:info@example.com">
                    info@example.com
                  </a>
                  <a rel="noopener noreferrer" href="mailto:info@support.com">
                    info@support.com
                  </a>
                </div>
              </div>
              <div className="address">
                <div className="address-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 col-lg-4 col-xl-5">
              <div className="copy-txt">
                <span>
                  Copyright 2022 <b>Finibus</b> | Design By{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://www.egenslab.com/"
                    target="_blank"
                  >
                    Egens Lab
                  </a>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 col-xl-7">
              <ul className="footer-bottom-menu">
                <li>
                  <Link onClick={scrollTop} href={"#"}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href={"#"}>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href={"#"}>
                    Support Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} href={"#"}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="scroll-top opacity">
      <ScrollButton></ScrollButton>
    </div>
  </>
  );
}

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 800);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <i
      className="bi bi-arrow-up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <span>top</span>
    </i>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

function BannerWiget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="widget-banner">
        <img src="/images/blogbackground.png
        " alt="bannerWiget" />
        <div className="banner-content">
          <div className="banner-inner">
            <h2>About Your Security.</h2>
            <div className="cmn-btn">
              <Link href="/contact" onClick={scrollTop}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerWiget;

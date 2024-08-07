'use client';
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import ProgressBar from "@ramonak/react-progress-bar";

function WhyChooseUsArea(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="why-choose-us sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="title black"><span>OUR HISTORY: 5-Star Rated Company</span>
                <h2 className="mb-15">PRIVATE SECURITY COMPANY</h2>
              </div>
              <div>
                <video src="video.mp4" autoPlay loop muted playsInline
                  style={{ width: "100%", height: "auto" }}>Your browser does not support the video.</video>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="valuable-skills undefined"><img src="images/watch1.jpg" alt="images" />
                <div className="signle-bar pt-0">
                  <h6>Watch Security has a rich history of pioneering advanced security solutions. From our humble
                    beginnings, we've evolved into a trusted name in the industry, consistently delivering excellence
                    in safeguarding businesses, residences, and properties. Our journey reflects a commitment to staying
                    ahead with cutting-edge technology, building an expert team, and tailoring security solutions to
                    individual needs. Watch Security's 45-year legacy is a testament to our unwavering dedication to
                    providing innovative and reliable security services for our valued clients.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default WhyChooseUsArea;

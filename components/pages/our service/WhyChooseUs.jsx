// components/WhyChooseUs.js

const WhyChooseUs = () => {
    return (
      <section className="why-choose-us sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="title black">
                <span>OUR HISTORY: 5-Star Rated Company</span>
                <h2 className="mb-15">PRIVATE SECURITY COMPANY</h2>
              </div>
              <div>
                <video
                  src="intro-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: 'auto' }}
                  aria-label="Introduction Video"
                >
                  Your browser does not support the video.
                </video>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="valuable-skills undefined">
                <img src="images/watch1.jpg" alt="Watch Security" />
                <div className="signle-bar pt-0">
                  <h6>
                    Watch Security has a rich history of pioneering advanced security solutions...
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  
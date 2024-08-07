// components/LetsTalk.js

import Link from 'next/link';

const LetsTalk = () => {
  return (
    <section className="lets-talk sec-pad">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9 col-lg-8 col-xl-7">
            <div className="title special">
              <span>Let’s Talk</span>
              <h2>
                PROTECT YOUR HOME OR BUSINESS <br />
                <b>WITH OUR WATCH SECURITY</b> SOLUTIONS
              </h2>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-5 text-end">
            <div className="getin-touch">
              <div className="cmn-btn">
                <Link href="/contact">
                  <a>Get In Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;

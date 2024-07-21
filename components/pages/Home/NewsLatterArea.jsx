import React from "react";
import Link from "next/link";

function NewsLatterArea(props) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="latest-news sec-mar">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link onClick={scrollTop} href="#">
                  <a>Web Design</a>
                </Link>
              </div>
              <div className="post-img">
                <Link onClick={scrollTop} href={`/blog-details`} passHref>
                  <a>
                    <img
                      src={"/images/post/post-1.jpg"}
                      alt="img"
                    />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src={"/images/atoma.jpg"}
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5><span>Posted by, ATOMASZ</span></h5>
                    <span>08 March, 2023</span>
                  </div>
                </div>
                <h3>
                  <Link onClick={scrollTop} href={`/blog-details`} passHref>
                    <a>
                      <p>
                        Positive: Professionalism, Punctually, Quality, Responsiveness, Value Hassan and it team have been recommended to my by the company who provided my gate. I can say I could not recommend them enough for their swift and professional services.And very reason-able prices!! If i need anything in the future
                      </p>
                    </a>
                  </Link>
                </h3>
                <div className="view-btn">
                  <Link onClick={scrollTop} href={`/blog-details`} passHref>
                    <a>View details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link onClick={scrollTop} href={"/"} passHref>
                  <a>Software</a>
                </Link>
              </div>
              <div className="post-img">
                <Link onClick={scrollTop} href={`/blog-details`} passHref>
                  <a>
                    <img
                      src={"/images/morgan.jpg"}
                      alt="images"
                    />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src={"/images/morgan.jpg"}
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Mike Morgan</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
                <h3>
                  <Link onClick={scrollTop} href={`/blog-details`} passHref>
                    <a>
                      <p>
                        It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professionalism and quality of the work has been fantastic and also the customer care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.
                      </p>
                    </a>
                  </Link>
                </h3>
                <div className="view-btn">
                  <Link onClick={scrollTop} href={`/blog-details`} passHref>
                    <a>View details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className={`title ${props.black}`}>
              <span>TESTIMONIAL</span>
              <h2>LOVES FROM SPECIAL CLIENTS</h2>
              <div className="cmn-btn">
                <Link onClick={scrollTop} href={`/blog`} passHref>
                  <a>View All Clients</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLatterArea;

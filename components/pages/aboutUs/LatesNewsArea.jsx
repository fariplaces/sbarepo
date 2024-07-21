import React from "react";
import Link from 'next/link';

function LatesNewsArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <>
    <section className="latest-news sec-mar">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link href="/" passHref onClick={scrollTop}>
                  Web Design
                </Link>
              </div>
              <div className="post-image">
                <Link href="/blog-details" passHref onClick={scrollTop} legacyBehavior>
                  <a>
                    <imag src="/images/post/post-1.jpg" alt="images" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <image src="/images/author/author-1.jpg" alt="images" />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Mike Morgan</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog-details" passHref onClick={scrollTop}>
                    
                      It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professional-ism and quality of the work has been fantastic and also the customer
                      care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.
                    
                  </Link>
                </h3>
                <div className="view-btn">
                  <Link href="/blog-details" passHref onClick={scrollTop}>
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link href="/" passHref onClick={scrollTop}>
                  Software
                </Link>
              </div>
              <div className="post-image">
                <Link href="/blog-details" passHref onClick={scrollTop} legacyBehavior>
                  <a>
                    <image src="/images/post/post-2.jpg" alt="images" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <image src="/images/author/author-2.jpg" alt="images" />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Alen Jodge</h5>
                    <span>05 January, 2021</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog-details" passHref onClick={scrollTop}>
                    
                      Mekusa a porttitor phari sod tellus algo quis ksro.
                    
                  </Link>
                </h3>
                <p>
                  Aptent taciti sociosqu ad litora torquent pi himenaeos.
                  Praesent nec neque at dolor ti venenatis consectetur eu quis
                  ex.
                </p>
                <div className="view-btn">
                  <Link href="/blog-details" passHref onClick={scrollTop}>
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="title black">
              <span>Blog</span>
              <h2>Latest news And Article modern design.</h2>
              <div className="cmn-btn">
                <Link href="/blog" passHref onClick={scrollTop}>
                  View All Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default LatesNewsArea;

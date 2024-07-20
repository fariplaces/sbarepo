import React from "react";
import Link from 'next/link';

function LatesNewsArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="latest-news sec-mar">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link href="/" passHref>
                    <a onClick={scrollTop}>Web Design</a>
                  </Link>
                </div>
                <div className="post-image">
                  <Link href="/blog-details" passHref>
                    <a onClick={scrollTop}>
                      <img
                        src="/images/post/post-1.jpg"
                        alt="images"
                      />
                    </a>
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src="/images/author/author-1.jpg"
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Alen Jodge</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link href="/blog-details" passHref>
                      <a onClick={scrollTop}>
                        Donec a porttitor phari sod tellus Nunc quis erosn.
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p>
                  <div className="view-btn">
                    <Link href="/blog-details" passHref>
                      <a onClick={scrollTop}>View details</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="signle-news">
                <div className="tag">
                  <Link href="/" passHref>
                    <a onClick={scrollTop}>Software</a>
                  </Link>
                </div>
                <div className="post-image">
                  <Link href="/blog-details" passHref>
                    <a onClick={scrollTop}>
                      <img
                        src="/images/post/post-2.jpg"
                        alt="images"
                      />
                    </a>
                  </Link>
                </div>
                <div className="news-content">
                  <div className="author">
                    <div className="author-pic">
                      <img
                        src="/images/author/author-2.jpg"
                        alt="images"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Posted by, Alen Jodge</h5>
                      <span>05 January, 2021</span>
                    </div>
                  </div>
                  <h3>
                    <Link href="/blog-details" passHref>
                      <a onClick={scrollTop}>
                        Mekusa a porttitor phari sod tellus algo quis ksro.
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Aptent taciti sociosqu ad litora torquent pi himenaeos.
                    Praesent nec neque at dolor ti venenatis consectetur eu quis
                    ex.
                  </p>
                  <div className="view-btn">
                    <Link href="/blog-details" passHref>
                      <a onClick={scrollTop}>View details</a>
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
                  <Link href="/blog" passHref>
                    <a onClick={scrollTop}>View All Blog</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatesNewsArea;

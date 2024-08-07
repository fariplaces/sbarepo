// components/LatestNews.js

import Link from 'next/link';

const LatestNews = () => {
  return (
    <section className="latest-news sec-mar">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link href="/access-control">
                  <a>Web Design</a>
                </Link>
              </div>
              <div className="post-img">
                <Link href="/blog-details">
                  <a>
                    <img src="images/post/post-1.jpg" alt="Post Image" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img src="images/atoma.jpg" alt="Author" />
                  </div>
                  <div className="author-info">
                    <h5>
                      <span>Posted by, ATOMASZ</span>
                    </h5>
                    <span>08 March, 2023</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog-details">
                    <a>
                      Positive: Professionalism, Punctually, Quality, Responsiveness, Value...
                    </a>
                  </Link>
                </h3>
                <div className="view-btn">
                  <Link href="/blog-details">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="signle-news">
              <div className="tag">
                <Link href="/">
                  <a>Software</a>
                </Link>
              </div>
              <div className="post-img">
                <Link href="/blog-details">
                  <a>
                    <img src="images/post/post-1.jpg" alt="Post Image" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="author">
                  <div className="author-pic">
                    <img src="images/morgan.jpg" alt="Author" />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Mike Morgan</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
                <h3>
                  <Link href="/blog-details">
                    <a>
                      It is the first time I have used Hassan and his team...
                    </a>
                  </Link>
                </h3>
                <div className="view-btn">
                  <Link href="/blog-details">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="title black">
              <span>TESTIMONIAL</span>
              <h2>LOVES FROM SPECIAL CLIENTS</h2>
              <div className="cmn-btn">
                <Link href="/blog">
                  <a>View All Clients</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

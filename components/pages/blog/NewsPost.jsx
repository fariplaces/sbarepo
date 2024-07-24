import React from "react";
import Link from "next/link";

function NewsPost() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="sidebar-widget">
        <h4>Newest Post</h4>
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details" scroll={false}>
              <img
                src="/images/newestpost1.png"
                alt="newest post images"
                onClick={scrollTop}
                style={{ cursor: 'pointer' }} // Ensure the image appears clickable
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details" scroll={false}>
                <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Residential Gate Operators & Systems
                </span>
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details" scroll={false}>
              <img
                src="/images/newestpost.png"
                alt="newest post images"
                onClick={scrollTop}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details" scroll={false}>
                <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Industrial Sliding Gates for Enhanced Access Control
                </span>
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details" scroll={false}>
              <img
                src="/images/newestpost2.png"
                alt="newest post images"
                onClick={scrollTop}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details" scroll={false}>
                <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Gate Automation Specialists
                Unlock the Future of Convenience: Gate Automation Experts at Your Service
                </span>
              </Link>
            </h6>
            <span className="post-date">05 January, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPost;

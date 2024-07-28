import React from "react";
import Link from "next/link";

function BlogDetailsWrapper() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="blog-details">
        <div className="post-thumbnail">
          <img
            src="/images/post/blog-list-3.jpg"
            alt="blog images"
          />
        </div>
        <h3>
        SMART SECURITY SERVICE FOR YOUR LIVE SAFETY
        </h3>
        <div className="author-comments">
          <div className="author">
            <div className="author-pic">
              <img
                src="/images/atoma.jpg"
                alt="blog images"
              />
            </div>
            <div className="author-info">
              <h5>Posted by, ATOMASZ</h5>
              <span>05 January, 2021</span>
            </div>
          </div>
          <div className="comments">
            <span>
              <i className="bi bi-chat-dots" /> Comments (01)
            </span>
          </div>
        </div>
        <p>
        Choose Watch Security for outstanding security solutions that merge proven quality, an expert team, cutting-edge technology, bespoke solutions, and consistent client satisfaction. Watch Security has established credibility among businesses, homeowners, and property owners and appreciates providing reliable security services. This includes sophisticated CCTV systems, intelligent intruder alarms, and cutting-edge access control. Our dedication to custom solutions means we shall work directly with you to meet your requirements for safety. Watch Security's clients regularly express their appreciation for our team's professionalism, quick responses, and practical outcomes. If your looking for a partner who will go above and beyond to keep your most prized possessions secure, Look no further than Watch Security.
        </p>
        <h4>We are Watch Security, an industry leader in cutting-edge security solutions for over a decade.</h4>
        <p>
        At Watch Security, we understand that every property and business is unique. That’s why we take a personalised approach to security, working closely with our clients to assess their requirements and design customised solutions that address their specific concerns. Whether it’s installing state-of-the-art CCTV systems, access control solutions, or intruder alarms, we have the expertise to deliver reliable and effective security measures.
        </p>
        <div className="blog-quate">
          <blockquote>
            <div className="quote-left">
              <i className="bi bi-quote" />
            </div>
            <p>
            We pride ourselves on our commitment to customer satisfaction. Our team of engineers is not only highly skilled but also dedicated to providing exceptional service <br />
              <b>Watch Security</b>
            </p>
            <div className="quote-right">
              <i className="bi bi-quote" />
            </div>
          </blockquote>
        </div>
        <p>
        At Watch Security, we stay at the forefront of technological advancements in the security industry. By partnering with leading manufacturers, we offer cutting-edge solutions that integrate seamlessly into our clients’ properties, providing them with advanced security features and remote monitoring capabilities.
        </p>
        <div className="blog-banner">
          <div className="row">
            <div className="col-xl-6">
              <div className="blog-banner-img">
                <img
                  src="/images/blog-banner.png"
                  alt="blog images"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-banner-content">
              <p>
                Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom. With our commitment to safeguarding homes and businesses, we offer reliable and innovative security solutions tailored to meet the unique needs of our clients. Led by our dedicated Managing Director, Hassan Khan, and supported by a team of highly skilled and professional engineers, Watch Security has built a reputation for excellence in the industry. Our team brings together extensive expertise in electronic security systems, ensuring that our clients receive the highest level of protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-8">
              <div className="tags">
                <Link href="#" onClick={scrollTop}>
                Access Control
                </Link>
                <Link href="#" onClick={scrollTop}>
                Security Guard
                </Link>
                <Link href="#" onClick={scrollTop}>
                Fire Alarm System
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="share-now">
                <span>share now</span>
                <ul className="social-share">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrapper;

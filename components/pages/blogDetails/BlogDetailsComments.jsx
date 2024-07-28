import React from "react";
import Link from "next/link";

function BlogDetailsComments() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="blog-comments">
        <h3>Comment</h3>
        
        <div className="single-comments">
          <div className="post-author">
            <img
              src="/images/single4.png"
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Home Security</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
            Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom. With our commitment to safeguarding homes and businesses, we offer reliable and innovative security solutions tailored to meet the unique needs of our clients. 
            </p>
            <div className="reply">
              <Link href="#" onClick={scrollTop}>
                <img
                  src="/images/icons/arrow-reply.svg"
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>

        <div className="single-comments">
          <div className="post-author">
            <img
              src="/images/single5.png"
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Access Control</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
            At Watch Security, we understand that every property and business is unique. That’s why we take a personalised approach to security, working closely with our clients to assess their requirements and design customised solutions that address their specific concerns. Whether it’s installing state-of-the-art CCTV systems, access control solutions, or intruder alarms, we have the expertise to deliver reliable and effective security measures.
            </p>
            <div className="reply">
              <Link href="#" onClick={scrollTop}>
                <img
                  src="/images/icons/arrow-reply.svg"
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>

        <div className="single-comments">
          <div className="post-author">
            <img
              src="/images/single6.png"
              alt="blog comments images"
            />
          </div>
          <div className="post-author-details">
            <h4>Emergency Lighting</h4>
            <span>11 January, 2022 At 01.56 pm</span>
            <p>
            Watch Security is a leading provider of electronic security and alarm monitoring services for residential, small, and large businesses across the United Kingdom. With our commitment to safeguarding homes and businesses, we offer reliable and innovative security solutions tailored to meet the unique needs of our clients. Led by our dedicated Managing Director, Hassan Khan, and supported by a team of highly skilled and professional engineers, Watch Security has built a reputation for excellence in the industry.
            </p>
            <div className="reply">
              <Link href="#" onClick={scrollTop}>
                <img
                  src="/images/icons/arrow-reply.svg"
                  alt="blog comments images"
                />{" "}
                Reply
              </Link>
            </div>
          </div>
        </div>

        <div className="comment-form">
          <h3>Leave A Comment</h3>
          <form onSubmit={(e) => e.preventDefault()} action="#" method="post">
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Type Your Message"
                  defaultValue={""}
                />
                <input type="submit" value="Submit Comment" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsComments;

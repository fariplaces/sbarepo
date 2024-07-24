import React from "react";
import Link from "next/link";

function BlogCart(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="col-12 col-lg-6 col-xl-6">
        <div className="signle-news">
          <div className="tag">
            <Link href="/" onClick={scrollTop}>
              {props.tag}
            </Link>
          </div>
          <div className="post-img">
            <Link href="/blog-details" onClick={scrollTop}>
            <img src="/images/post/post-1.jpg" alt="images" />
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
              <Link href="/blog-details" onClick={scrollTop}>
              <p>
                      It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professionalism and quality of the work has been fantastic and also the customer care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.
                    </p>
              </Link>
            </h3>
            {/* <p>
              Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent
              nec neque at dolor ti venenatis consectetur eu quis ex.
            </p> */}
            <div className="view-btn">
              <Link href="/blog-details" onClick={scrollTop}>
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCart;

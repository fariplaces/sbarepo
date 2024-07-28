import React from "react";
import Link from "next/link";

function StandardNewsList() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="row gy-5">
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                href="/blog-details"
                onClick={scrollTop}
              >
                <img
                  src="/images/post/blog-list-3.jpg"
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src="/images/morgan.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by, Mike Morgan</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link href="#">
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                  <p>
                      It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professionalism and quality of the work has been fantastic and also the customer care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.
                    </p>
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                href="/blog-details"
                onClick={scrollTop}
              >
                <img
                  src="/images/post/blog-list-1.jpg"
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src="/images/atoma.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by,  ATOMASZ</h5>
                    <span>07 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link href="#">
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                 <p>
                      Positive: Professionalism, Punctually, Quality, Responsiveness, Value Hassan and it team have been recommended to my by the company who provided my gate. I can say I could not recommend them enough for their swift and professional services.And very reason-able prices!! If i need anything in the future
                    </p>
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="signle-news-list">
            <div className="post-img">
              <Link
                href="/blog-details"
                onClick={scrollTop}
              >
                <img
                  src="/images/post/blog-list-2.jpg"
                  alt="images"
                />
              </Link>
            </div>
            <div className="news-content">
              <div className="post-author-details">
                <div className="author">
                  <div className="author-pic">
                    <img
                      src="/images/morgan.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="author-info">
                    <h5>Posted by,Mike Morgan</h5>
                    <span>05 January, 2022</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <Link href="#">
                  <span>
                    <i className="bi bi-chat-dots" />
                    comments (01)
                  </span>
                </Link>
              </div>
              <h3>
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                  <p>
                      It is the first time I have used Hassan and his team and mu expectations have been exceeded. The professionalism and quality of the work has been fantastic and also the customer care has been great. I would definitely use the team again in the future, for example if i update my alarams system and I highly recommend the team.
                    </p>
                </Link>
              </h3>
              <div className="view-btn">
                <Link
                  href="/blog-details"
                  onClick={scrollTop}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StandardNewsList;

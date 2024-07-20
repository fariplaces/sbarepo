import React from "react";
import Link from "next/link";

function Breadcrumb() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <>
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <h1>About us</h1>
              <span>
                <Link href="/" onClick={scrollTop}>
                  Home
                </Link>
                <i>
                  {/* <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/about.png"
                    }
                    alt="images"
                  /> */}
                </i>
                About us
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Breadcrumb;

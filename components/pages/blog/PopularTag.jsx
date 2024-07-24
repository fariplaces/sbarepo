import React from "react";
import Link from "next/link";

function PopularTag() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="sidebar-widget">
        <h4>Popular tag</h4>
        <ul className="tag-list">
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Website
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Web Design
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Development
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Graphic Design
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Graphic
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                UI/UX Design
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Activities
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                Software Design
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                3d Design
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PopularTag;

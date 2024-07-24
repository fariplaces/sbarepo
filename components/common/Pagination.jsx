import React from "react";
import Link from "next/link";

function Pagination() {
  return (
    <>
      <nav>
        <ul className="pagination">
          <li>
            <Link href="/" scroll={false}>
              <span style={{ cursor: 'pointer' }}>
                <i className="bi bi-arrow-left-short"></i>
              </span>
            </Link>
          </li>
          <li className="active">
            <Link href="/" scroll={false}>
              <span style={{ cursor: 'pointer' }}>01</span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span style={{ cursor: 'pointer' }}>02</span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span style={{ cursor: 'pointer' }}>03</span>
            </Link>
          </li>
          <li>
            <Link href="/" scroll={false}>
              <span style={{ cursor: 'pointer' }}>
                <i className="bi bi-arrow-right-short"></i>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;

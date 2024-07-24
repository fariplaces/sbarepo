import React from "react";
import Link from "next/link";

function ServiceList() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sidebar-widget">
        <h4>Services</h4>
        <ul className="service-list">
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                </i>
                CCTV & Surveillance
                 {/* <span>(15)</span> */}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                </i>
                Maintenance
                 {/* <span>(18)</span> */}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                </i>
                Automatic Electric Gates 
                {/* <span>(21)</span> */}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                </i>
                Gates and barriers
                 {/* <span>(25)</span> */}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                  
                </i>
                Security Guard 
                {/* <span>(29)</span> */}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service-details" scroll={false}>
              <span onClick={scrollTop} style={{ cursor: 'pointer' }}>
                <i>
                  {/* <img
                    src="/images/icons/dash-circle-icon.svg"
                    alt="images"
                  /> */}
                </i>
                Intruder Alarms 
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ServiceList;

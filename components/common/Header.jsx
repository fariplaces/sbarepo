"use client";
import Link from "next/link";
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useReducer } from "react";
import AnimatedCursor from "react-animated-cursor";

/*---------Using reducer to manage the active or inactive menu----------*/
const initialState = { activeMenu: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'home':
      return { activeMenu: 'home' };
    case 'service':
      return { activeMenu: 'service' };
    case 'case Study':
      return { activeMenu: 'case Study' };
    case 'blogs':
      return { activeMenu: 'blogs' };
    case 'news':
      return { activeMenu: 'news' };
    default:
      return { activeMenu: '' };
  }
}

function Header() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".position_top");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(sidebar === false || sidebar === 0 ? 1 : false);
  };

  // scroll top event
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatedCursor
        className="coursor"
        innerSize={8}
        outerSize={30}
        color="217, 10, 44"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
          "a",
          "i",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".sub-menu",
          ".has-child",
          ".single-client",
          ".SRLControls",
        ]}
      />
      <header className="position_top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
              <div className="logo">
                <Link href="/" onClick={scrollTop}>
                  <img src="/images/logo.png" alt="image" />
                </Link>
              </div>
            </div>
            <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
              <nav className={sidebar === 1 ? "main-nav slidenav" : "main-nav"}>
                <div className="mobile-menu-logo">
                  <Link href="/" onClick={scrollTop}>
                    <img src="/images/logo.png" alt="image" />
                  </Link>
                </div>
                <ul>
                  <li className="has-child active" onClick={() => dispatch({ type: 'homeOne' })}>
                    <Link href="/" className={state.activeMenu === 'homeOne' ? 'active' : ''}>Home</Link>
                    <i className="bi bi-chevron-down" />
                    {/* <ul className={state.activeMenu === 'homeOne' ? "sub-menu d-block" : "sub-menu d-none"}>
                      <li>
                        <Link href="/" onClick={scrollTop} className={state.activeMenu === 'homeOne' ? 'active' : ''}>
                          Home 01
                        </Link>
                      </li>
                      <li>
                        <Link href="/home2" onClick={scrollTop}>
                          Home 02
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/about" onClick={scrollTop}>
                      About us
                    </Link>
                  </li>
                  <li className="has-child" onClick={() => dispatch({ type: 'service' })}>
                    <Link href="/" onClick={scrollTop}>
                      Services
                    </Link>
                    <i className="bi bi-chevron-down" />
                    <ul className={state.activeMenu === 'service' ? "sub-menu d-block" : "sub-menu d-none"}>
                      <li>
                        <Link href="/service" onClick={scrollTop}>
                        service
                        </Link>
                      </li>
                      <li>
                        <Link href="/cctv" onClick={scrollTop}>
                          CCTV & Surveillance
                        </Link>
                      </li>
                      <li>
                        <Link href="/inturder-alarms" onClick={scrollTop}>
                          Inturder Alarms
                        </Link>
                      </li>
                      <li>
                        <Link href="/ access-control" onClick={scrollTop}>
                       Access Control
                        </Link>
                      </li>
                      <li>
                        <Link href="/automatic-electric-gates" onClick={scrollTop}>
                        Automatic Electric Gates 
                        </Link>
                      </li>
                      <li>
                        <Link href="/gates" onClick={scrollTop}>
                         Gates and Barriers
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details" onClick={scrollTop}>
                        Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link href="/fire-alarm-system" onClick={scrollTop}>
                          Fire Alarm System 
                        </Link>
                      </li>
                      <li>
                        <Link href="/ security-guard " onClick={scrollTop}>
                        Security Guard 
                        </Link>
                      </li>
                      <li>
                        <Link href="/fire-alarm" onClick={scrollTop}>
                          Fire Alarms
                        </Link>
                      </li>
                      <li>
                        <Link href="/emergency-lighting" onClick={scrollTop}>
                          Emergency Lighting
                        </Link>
                      </li>
                      <li>
                        <Link href="/rire-extinguisher" onClick={scrollTop}>
                         Rire Extinguisher 
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child" onClick={() => dispatch({ type: 'Case Study' })}>
                    <Link href="/" onClick={scrollTop}>
                      Case Study
                    </Link>
                  </li>
                  <li className="has-child" onClick={() => dispatch({ type: 'News' })}>
                    <Link href="/" onClick={scrollTop}>
                      News
                    </Link>
                  </li>
                  <li className="has-child" onClick={() => dispatch({ type: 'blogs' })}>
                    <Link href="/">Blogs</Link>
                    <i className="bi bi-chevron-down" />
                    <ul className={state.activeMenu === 'blogs' ? "sub-menu d-block" : "sub-menu d-none"}>
                      <li>
                        <Link href="/blog" onClick={scrollTop}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-standard" onClick={scrollTop}>
                          Blog Standards
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details" onClick={scrollTop}>
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact" onClick={scrollTop}>
                      Contact us
                    </Link>
                  </li>
                </ul>
                <div className="get-quate dn">
                  <div className="cmn-btn">
                    <Link href="/contact" onClick={scrollTop}>
                      Get a quote
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="mobile-menu">
                <div
                  onClick={showSidebar}
                  className={sidebar === 1 ? "cross-btn h-active" : "cross-btn"}
                >
                  <span className="cross-top" />
                  <span className="cross-middle" />
                  <span className="cross-bottom" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-end">
              <div className="get-quate">
                <div className="cmn-btn">
                  <Link href="/contact" onClick={scrollTop}>
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

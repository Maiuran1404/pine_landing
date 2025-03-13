"use client";

import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MainAboutPage1() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <>
            <style jsx global>{`
              .main-nav {
                min-height: 140px !important;
              }
              .main-nav-sub {
                padding-top: 30px !important;
                padding-bottom: 30px !important;
              }
              .nav-logo-wrap {
                margin-top: 10px !important;
                position: relative !important;
                width: 260px !important;
                height: 100px !important;
              }
              .nav-logo-wrap .logo {
                height: 100% !important;
                max-width: none !important;
                display: block !important;
              }
              .nav-logo-wrap .logo img {
                width: auto !important;
                height: 100% !important;
                max-height: 100% !important;
                object-fit: contain !important;
              }
              .inner-nav {
                margin-top: 30px !important;
              }
            `}</style>
            <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
              <div className="main-nav-sub full-wrapper">
                {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
                <div className="nav-logo-wrap local-scroll">
                  <Link href="/" className="logo">
                    <img
                      src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
                      alt="Logo"
                      className="light-mode-logo"
                    />
                    <img
                      src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
                      alt="Logo" 
                      className="dark-mode-logo"
                    />
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="mobile-nav" role="button" tabIndex={0}>
                  <i className="mobile-nav-icon" />
                  <span className="visually-hidden">Menu</span>
                </div>
                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                  <ul className="clearlist scroll-nav local-scroll justify-content-end">
                    <li className="active">
                      <a href="mailto:ibthemes21@gmail.com">
                        <i className="mi-email align-center" />
                        ibthemes21@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mi-call align-center" /> 908 91 475
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Main Menu */}
              </div>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
              <section
                className="home-section bg-dark-1 light-content parallax-5"
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
                id="home"
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url(/assets/newphotos/2.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px)',
                    opacity: '0.5',
                    zIndex: 0
                  }}
                ></div>
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1
                  }}
                ></div>
                <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120" style={{ position: 'relative', zIndex: 2 }}>
                  {/* Home Section Content */}
                  <div className="home-content">
                    <div className="row">
                      <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="hs-wrap">
                          <div className="wow fadeInUp" data-wow-delay=".1s">
                            <h1 className="hs-title-12 mb-40 mb-sm-30">
                              Sorry
                            </h1>
                          </div>
                          <div
                            className="mb-40 mb-sm-30 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <h2 className="section-descr mb-20">
                              We are currently under construction.
                            </h2>
                            <p className="opacity-065 mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus mi urna, vehicula aliquam dapibus
                              ornare, semper semper nisl.
                            </p>
                          </div>
                          <div
                            className="local-scroll wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <Link
                              href={`/`}
                              className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                            >
                              <i className="mi-arrow-left size-24 align-center" />
                              <span>Back To Home Page</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </section>
              {/* End Home Section */}
            </main>
          </>

          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}

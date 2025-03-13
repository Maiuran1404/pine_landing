import React from "react";
import Image from "next/image";
import Service from "./Service";
import Blog from "./Blog";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Link from "next/link";
import Accordion from "./Accordion";

export default function Home8({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-2 " : "bg-dark-1"
        }  light-content`}
        id="about"
      >
        {dark || eadge2 ? <></> : <div className="edge-top-figure-1" />}
        {/* Env Round Edge */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn text-center"
                data-splitting="lines"
              >
                <h2 className="section-title mb-40 mb-sm-30">Our Story</h2>
                Born from a passion for craftsmanship and social responsibility, 
                Tailor Studio emerged from the heart of Norway with a simple yet 
                powerful vision: to create premium clothing that not only elevates 
                your wardrobe but also uplifts communities. Every piece we craft 
                combines timeless Scandinavian design with sustainable practices, 
                ensuring that both our customers and our planet thrive together.
              </div>
              {/* Accordion */}
              <Accordion />
              {/* End Accordion */}
              <div
                className="page-section scrollSpysection  pb-0"
                id="established"
              >
                <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
                  <div className="position-relative z-index-1">
                    <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
                      <span className="d-inline-block wow fadeRotateIn">
                        Merch
                      </span>
                      <span className="d-inline-block wow fadeRotateIn">
                        with Soul
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <p className="section-descr mb-0">
                          For every garment sold, we donate 10% to charitable initiatives 
                          supporting environmental conservation and youth education in Norway. 
                          We believe that premium fashion should not only make you look good 
                          but also empower positive change in our communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Services
                </h2>
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          {/* Services Grid */}
          <Service />
          {/* End Services Grid */}
          
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
      </section>
      <section
        className={`page-section scrollSpysection  pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Recent Collabs
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                  </>
                ) : (
                  <>
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <Blog />
          {/* End Newsletter Form */}
        </div>
      </section>
      <div
        className={`page-section overflow-hidden  ${
          dark ? "light-content" : ""
        } `}
      >
        <Marquee />
      </div>
      <section
        className={`page-section pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
      >
        <Testimonials />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Stories
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {/* Change the email address in the href attribute */}
                <a
                  href="mailto:ibthemes21@gmail.com"
                  className="link-hover-anim align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Say hi{" "}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Say hi{" "}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <div className="row">
            <div className="col-11 col-sm-10">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Let's Create </span>
                <span className="d-block text-end wow fadeRotateIn">
                  Impact Together
                </span>
              </h3>
            </div>
          </div>

          <Contact />
        </div>
      </section>
    </>
  );
}

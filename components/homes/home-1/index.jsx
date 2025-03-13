import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";
import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <About />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                Check recent achievements.
              </h2>
              <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We provide the effective ideas that grow businesses of our
                clients.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request Price</span>
                  </a>
                ) : (
                  <Link
                    href="/lets-work-together"
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request Price</span>
                  </Link>
                )}
              </div>
            </div>
            <Facts />
          </div>
        </div>
      </ParallaxContainer>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${
          dark ? "bg-dark-1 light-content z-index-1" : ""
        }`}
      >
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div
            className="decoration-3 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed="-0.7"
            data-rellax-percentage="0.5"
          >
            <Image
              width={148}
              height={148}
              className="svg-shape"
              src="/assets/images/decoration-3.svg"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                The power of design help us to solve complex problems and
                cultivate business solutions.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </a>
                ) : (
                  <Link
                    href="/lets-work-together"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
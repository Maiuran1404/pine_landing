import Footer1 from "@/components/footers/Footer1";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Faq from "@/components/common/Faq";
import { menuItems } from "@/data/menu";
import Contact2 from "@/components/homes/home-1/Contact2";

const dark = false;
export const metadata = {
  title: "Let's Work Together | Build Something Amazing",
  description:
    "Get in touch with us to start building your next digital solution. We're here to turn your ideas into reality.",
};

export default function LetsWorkTogether() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                }}
              >
                <>
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                    <div className="container position-relative pt-50">
                      <div className="text-center">
                        <div className="row">
                          <div className="col-md-8 offset-md-2">
                            <div className="mb-40 wow fadeInUp">
                              <Image
                                src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
                                width={120}
                                height={40}
                                alt="Logo"
                                className="light-mode-logo"
                              />
                            </div>
                            <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s"
                            >
                              Let's Work Together
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                Start building something amazing with us.
                              </span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              </ParallaxContainer>
            </section>
            <>
              {/* Contact Section */}
              <section className="page-section pt-0" id="contact">
                <Contact2 />
              </section>
              {/* End Contact Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.75"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray mb-0">
                        Have questions about working with us? Here are some
                        common questions our clients ask. If you don't find what
                        you're looking for, feel free to reach out directly.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq />
                      {/* End Accordion */}
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}

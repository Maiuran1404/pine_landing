"use client";
import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "@/components/common/ModalVideo";
import { parallaxMouseMovement } from "@/utlis/parallax";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Home Section Content */}
        <div className="home-content text-start" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-12 d-flex align-items-center mb-sm-60">
              <div>
                <h2
                  className="section-caption mb-30 mb-xs-10 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Tailor Studio AS
                </h2>
                <h1 className="hs-title-1 mb-30">
                  <AnimatedText
                    text={"Making Tech Snabba"}
                  />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
Tailor Studio builds apps & websites in days, not months. Because in tech, the faster you move, the faster you win.
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="/main-pages-contact-1"
                    className="link-hover-anim align-middle opacity-1 no-hover"
                  >
                    <span className="link-hover-anim underline" data-link-animate="y">
                      <span className="link-strong link-strong-unhovered">
                        Let's Work Together
                      </span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        Let's Work Together
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}

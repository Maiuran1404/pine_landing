"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-6 text-gray mb-sm-50">
            <Link href="/" className="logo">
              <Image
                src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
                width={120}
                height={40}
                alt="Logo"
                className="light-mode-logo"
              />
              <Image
                src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
                width={120}
                height={40}
                alt="Logo"
                className="dark-mode-logo"
              />
            </Link>
            <p>
              Pine - Connecting food lovers worldwide. Share experiences, discover restaurants,
              and build meaningful connections through your shared love of food.
            </p>
            <div className="clearlinks">
              <strong>E.</strong>
              <a href="mailto:contact@pine.app">contact@pine.app</a>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="mt-30">
              <h3 className="fw-title">Social Media</h3>
              <ul className="fw-menu clearlist d-inline-block text-start">
                <FooterSocials />
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-6">
            <b>© Pine {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-6 text-md-end clearfix">
            <b>Based in San Francisco, CA.</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}

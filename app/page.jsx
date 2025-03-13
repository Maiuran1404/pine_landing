"use client";

import Footer1 from "@/components/footers/Footer3";
import Home8 from "@/components/homes/home-8";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero3 from "@/components/homes/home-1/heros/Hero3";
import Header1Multipage from "@/components/headers/Header1Multipage";

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <style jsx global>{`
          .nav-logo-wrap {
            position: relative !important;
            width: 260px !important;
            height: 80px !important;
          }
          .nav-logo-wrap .logo {
            height: 100% !important;
            max-width: none !important;
            display: block !important;
          }
          .nav-logo-wrap .logo img {
            width: auto !important;
            height: 80px !important;
            max-height: 100% !important;
            object-fit: contain !important;
          }
        `}</style>
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-white scrollSpysection"
              id="home"
            >
              <Hero3 /> 
            </ParallaxContainer>
            <Home8 />
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}

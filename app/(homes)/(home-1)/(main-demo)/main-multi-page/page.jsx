import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

export const metadata = {
  title: "Pine - Connect Through Food",
  description:
    "Pine - A social platform that brings food lovers together to share experiences, discover new restaurants, and connect with fellow foodies.",
};

export default function Home1MainDemoMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}

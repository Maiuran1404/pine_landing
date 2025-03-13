import AnimatedText from "@/components/common/AnimatedText";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Clinic Apps | Patient Engagement Solutions",
  description: "Modern clinic apps for appointment booking, loyalty rewards, and personalized notifications. Enhance your patient experience with our digital solutions.",
};

export default function ClinicSolutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-section bg-dark-1 light-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100">
          <div className="row">
            <div className="col-lg-6 mb-md-40">
              <h1 className="hs-line-4 mb-20 wow fadeInUp">Patient-First Apps</h1>
              <h2 className="hs-line-7 mb-40 mb-xs-20 wow fadeInUp" data-wow-delay="0.1s">
                Engage Your Patients with Modern Clinic Apps
              </h2>
              <div className="local-scroll mb-20 wow fadeInUp" data-wow-delay="0.2s">
                <Link
                  href="/lets-work-together"
                  className="btn btn-mod btn-w btn-large btn-round"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/assets/images/promo-1.jpg"
                alt="Patient Engagement Apps"
                width={600}
                height={400}
                className="wow fadeInLeft"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-title mb-70 mb-sm-40">
                <AnimatedText text="Enhance Patient Experience" />
              </h2>
            </div>
          </div>
          <div className="row multi-columns-row">
            {/* Feature 1 */}
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="features-item mb-md-40">
                <div className="features-icon">
                  <span className="icon-calendar"></span>
                </div>
                <h3 className="features-title">Easy Booking</h3>
                <div className="features-descr">
                  Simple and intuitive appointment booking system with instant confirmation
                  and calendar integration. Book appointments anytime, anywhere.
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="features-item mb-md-40">
                <div className="features-icon">
                  <span className="icon-gift"></span>
                </div>
                <h3 className="features-title">Loyalty Rewards</h3>
                <div className="features-descr">
                  Earn points with every visit and unlock exclusive rewards. Special
                  offers and discounts for loyal patients.
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="features-item mb-md-40">
                <div className="features-icon">
                  <span className="icon-bell"></span>
                </div>
                <h3 className="features-title">Smart Notifications</h3>
                <div className="features-descr">
                  Stay informed about new offers, appointment reminders, and health
                  tips through personalized push notifications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-2"
        style={{
          backgroundImage: "url(/assets/images/full-width-images/section-bg-1.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-title mb-70 mb-sm-40">Why Patients Love Our Apps</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-sm-40">
              <div className="text-center wow fadeInUp">
                <div className="count-wrapper mb-20">
                  <span className="count-number">2</span>min
                </div>
                <div className="count-descr">
                  <span className="count-title">Average Booking Time</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-sm-40">
              <div className="text-center wow fadeInUp">
                <div className="count-wrapper mb-20">
                  <span className="count-number">500</span>+
                </div>
                <div className="count-descr">
                  <span className="count-title">Points Earned Monthly</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-sm-40">
              <div className="text-center wow fadeInUp">
                <div className="count-wrapper mb-20">
                  <span className="count-number">10</span>x
                </div>
                <div className="count-descr">
                  <span className="count-title">Higher Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxContainer>

      {/* Features Detail Section */}
      <section className="page-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 mb-sm-40">
              <h2 className="section-title mb-40">
                <AnimatedText text="Designed for Patient Convenience" />
              </h2>
              <div className="section-text mb-30">
                <p>
                  Our clinic apps are built with patient convenience in mind. From easy
                  appointment booking to reward points and instant notifications, we make
                  healthcare access simpler and more engaging for your patients.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-30">
                    <li className="mb-10">✓ Quick Appointment Booking</li>
                    <li className="mb-10">✓ Points System</li>
                    <li className="mb-10">✓ Special Offers</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-30">
                    <li className="mb-10">✓ Push Notifications</li>
                    <li className="mb-10">✓ Digital Health Cards</li>
                    <li className="mb-10">✓ Appointment History</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/assets/images/promo-2.jpg"
                alt="Patient App Features"
                width={600}
                height={400}
                className="wow fadeInRight"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-section bg-dark-2 light-content">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3 className="section-title mb-30">Ready to Enhance Patient Engagement?</h3>
              <p className="section-descr mb-40">
                Join clinics that are transforming their patient experience with our
                modern booking and rewards app solution.
              </p>
              <div className="local-scroll">
                <Link
                  href="/lets-work-together"
                  className="btn btn-mod btn-w btn-large btn-round"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
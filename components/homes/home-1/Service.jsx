import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Our Tech Solutions</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="We build innovative tech products." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Leveraging cutting-edge technologies to create powerful digital solutions
                that transform businesses and user experiences.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Web Applications <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Mobile Apps <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Clinic Apps <span className="number">03</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Web Applications</h4>
                  <p className="text-gray mb-0">
                    Building scalable, responsive web applications using modern frameworks
                    like React, Next.js, and Node.js. From e-commerce platforms to
                    enterprise solutions, we deliver high-performance web experiences.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-1.jpg"
                alt="Web Application Development"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Mobile Apps</h4>
                  <p className="text-gray mb-0">
                    Creating native and cross-platform mobile applications that deliver
                    seamless experiences across iOS and Android. Using React Native
                    and Flutter for efficient, performant mobile solutions.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-2.jpg"
                alt="Mobile App Development"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Clinic Apps</h4>
                  <p className="text-gray mb-0">
                    Specialized healthcare applications designed for clinics and medical practices.
                    From patient management to appointment scheduling, we create intuitive
                    solutions that streamline clinical workflows and enhance patient care.
                  </p>
                  <div className="mt-30">
                    <Link
                      href="/clinic-solutions"
                      className="btn btn-mod btn-border btn-round btn-medium"
                    >
                      Learn More About Clinic Apps
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-3.jpg"
                alt="Clinic Applications"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

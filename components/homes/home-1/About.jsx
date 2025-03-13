"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-5 mb-sm-60">
          <div className="about-content">
            <h2 className="section-caption mb-30 mb-xs-10">
              About Tailor Studio
            </h2>
            <h3 className="section-title mb-60 mb-sm-30">
              Making Technology Snabba Fast
            </h3>
            <p className="section-descr mb-60 mb-sm-30">
              At Tailor Studio, we're obsessed with speed and performance. Our
              mission is to revolutionize technology by making it blazingly
              fast. We optimize and accelerate tech products to deliver
              unparalleled performance for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <h4 className="h5">Our Mission</h4>
          <p className="text-gray">
            We believe that speed is the cornerstone of modern technology. Our
            mission is to revolutionize how businesses operate by optimizing
            their tech stack for maximum performance. We start by analyzing your
            current technology and identifying opportunities for acceleration.
          </p>
          <h4 className="h5">Our Vision</h4>
          <p className="text-gray">
            We envision a world where technology never slows you down. Through
            innovative optimization techniques and cutting-edge solutions, we're
            building a future where every millisecond counts and every
            interaction is lightning fast.
          </p>
        </div>
      </div>
    </div>
  );
}

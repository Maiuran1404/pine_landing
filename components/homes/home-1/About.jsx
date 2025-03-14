"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-5 mb-sm-60">
          <div className="about-content">
            <h2 className="section-caption mb-30 mb-xs-10">
              About Pine
            </h2>
            <h3 className="section-title mb-60 mb-sm-30">
              Connecting Food Lovers Worldwide
            </h3>
            <p className="section-descr mb-60 mb-sm-30">
              At Pine, we're passionate about bringing food lovers together. Our
              mission is to create a vibrant community where food enthusiasts can
              share experiences, discover new restaurants, and connect with fellow
              foodies who share their culinary interests.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 offset-xl-1">
          <h4 className="h5">Our Mission</h4>
          <p className="text-gray">
            We believe that food has the power to bring people together. Our
            mission is to create a platform that makes it easy for food lovers to
            discover new restaurants, share their experiences, and connect with
            others who share their passion for great food.
          </p>
          <h4 className="h5">Our Vision</h4>
          <p className="text-gray">
            We envision a world where food lovers can easily discover and share
            their favorite dining experiences. Through our platform, we're building
            a community where every meal becomes an opportunity to connect and
            share the joy of food with others.
          </p>
        </div>
      </div>
    </div>
  );
}

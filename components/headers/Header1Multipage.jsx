"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSelect from "./components/LanguageSelect";

export default function Header1Multipage() {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo */}
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            className="light-mode-logo"
          />
          <Image
            src="/assets/Logo/Modern Elegant Beauty Skincare And Makeup Logo (2).png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="items-end clearlist">
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}

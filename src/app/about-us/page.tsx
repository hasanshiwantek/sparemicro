import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import GlobalSupplier from "../components/about/GlobalSupplier";
import AboutStats from "../components/about/AboutStats";
import AboutBrandSection from "../components/about/AboutBrandSection";
import SocialResponsibilitySection from "../components/about/SocialResponsibiltySection";
// import GetInTouch from "../components/Home/GetInTouch";
import dynamic from "next/dynamic";
import ProductServicesSection from "../components/about/ProductServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Spare Micro",
  description:
    "Learn more about Spare Micro, our mission, values, and commitment to providing quality server parts and IT solutions. Discover our story and how we serve our clients.",
  keywords: [
    "about Spare Micro",
    "company mission",
    "company values",
    "server parts provider",
    "Spare Micro story",
  ],
  alternates: {
    canonical: "https://sparemicro.vercel.app/about-us",
  },
  openGraph: {
    title: "About Us | Spare Micro",
    description:
      "Learn more about Spare Micro, our mission, values, and commitment to providing quality server parts and IT solutions.",
    url: "https://sparemicro.vercel.app/about-us",
    siteName: "Spare Micro",
    images: [
      {
        url: "/aboutus.png", // Replace with Spare Micro logo or About image
        width: 1200,
        height: 630,
        alt: "About Us - Spare Micro",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Spare Micro",
    description:
      "Learn more about Spare Micro, our mission, values, and commitment to providing quality server parts and IT solutions.",
    images: ["/aboutus.png"], // Replace with actual path if needed
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AOSWrapper = dynamic(() => import("../components/animation/AOSWrapper"));
const page = () => {
  return (
    <main className="flex flex-col gap-30" role="main">
      <div className="w-full max-w-[1170px] mx-auto lg:px-6 xl:px-0">
        <div className="py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">


            {/* Content */}
            <div className="lg:col-span-12">
              <h2 className=""><span
                className="text-[11px] !text-[#ff6900]"
                itemProp="name"
              >
                Home
              </span> {" "} <span className="mt-2 mx-3 text-gray-400 text-[11px]" aria-hidden="true">/</span> {" "} <span
                className="!text-[#ff6900] text-[11px]"
                itemProp="name"
              >
                  About Us
                </span></h2>

              {/* Page Title */}
              <h1 className="text-4xl mb-4 text-[#4A4A4A] mt-5">
                About Us
              </h1>

              {/* Remaining Paragraphs */}
              <p className="text-[16px] leading-[23px] mt-6">
                SpareMicro is your trusted destination for premium server parts and components, built to serve businesses that rely on uninterrupted performance. Whether you need processors, memory, storage, or networking equipment, our carefully curated inventory ensures you'll find exactly what your infrastructure demands. With a dedicated team of industry professionals behind every order, we deliver not just parts but confidence through expert guidance, responsive support, and a seamless shopping experience. At SpareMicro, we keep your servers running so you can keep your business growing.
              </p>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

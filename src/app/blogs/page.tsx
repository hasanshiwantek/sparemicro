import React from "react";
import BlogContainer from "../components/Blogs/BlogContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://server-blink.vercel.app"),
  title: {
    default: "Blogs",
    template: "%s | Blogs ",
  },
  description:
    "Read the latest articles and insights on servers, networking equipment, and IT solutions at Spare Micro. Stay informed with tech trends and product guides.",
  keywords: [
    "Spare Micro blog",
    "servers articles",
    "networking guides",
    "IT solutions insights",
    "tech trends",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://server-blink.vercel.app/blogs",
    siteName: "Spare Micro",
    title: "Spare Micro Blogs – Servers, Networking & IT Insights",
    description:
      "Explore expert blogs on servers, networking equipment, and IT solutions at Spare Micro.",
    images: [
      {
        url: "/serverblink-logo.png", // Replace with your actual banner/logo
        width: 1200,
        height: 630,
        alt: "Spare Micro Blog Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spare Micro Blogs – Servers, Networking & IT Insights",
    description:
      "Stay updated with expert insights on servers and IT solutions from Spare Micro.",
    images: ["/serverblink-logo.png"], // Replace with actual image
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const page = () => {
  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default page;

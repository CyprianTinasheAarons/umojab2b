import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

import { ReactTagManager } from "react-gtm-ts";

ReactTagManager.init({
  code: "G-XQDJFQLNLM", // GTM Code
  debug: false, // debug mode (default false)
  performance: false, // starts GTM only after user interaction (improve initial page load)
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umoja - Transform Your Business Online",
  description:
    "Get everything you need to establish your brand online - from logo design to a fully functional e-commerce store, all in one comprehensive package.",
  openGraph: {
    type: "website",
    url: "https://www.umojab2b.com/",
    title: "Umoja - Transform Your Business Online",
    description:
      "Get everything you need to establish your brand online - from logo design to a fully functional e-commerce store, all in one comprehensive package.",
    images: [
      {
        url: "https://ik.imagekit.io/y6vyyorps/PHOTO-2024-10-29-13-43-35%203.jpg?updatedAt=1730214693705",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umoja - Transform Your Business Online",
    description:
      "Get everything you need to establish your brand online - from logo design to a fully functional e-commerce store, all in one comprehensive package.",
    images: [
      {
        url: "https://ik.imagekit.io/y6vyyorps/PHOTO-2024-10-29-13-43-35%203.jpg?updatedAt=1730214693705",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} font-sans`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

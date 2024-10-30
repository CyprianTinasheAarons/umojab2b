import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umoja - Professional eCommerce Solutions & Brand Development Services",
  description:
    "Leading B2B eCommerce platform and branding solutions for small businesses. Expert eCommerce website development, brand identity design, and digital branding strategies. Transform your business with our comprehensive eCommerce marketing services.",
  keywords: [
    "eCommerce solutions",
    "B2B eCommerce platform",
    "brand development services", 
    "eCommerce website design",
    "digital branding strategies",
    "brand identity design",
    "eCommerce marketing agency",
    "online brand management",
    "eCommerce consulting",
    "branding solutions for small businesses",
    "African eCommerce",
    "Zimbabwe online business",
    "African B2B marketplace",
    "African digital commerce",
    "African business solutions",
    "African brand development",
    "African SME solutions",
    "African market expansion",
    "cross-border African trade",
    "African business digitization",
    "African retail solutions",
    "African wholesale platform",
    "African business growth",
    "African digital transformation"
  ],
  openGraph: {
    type: "website", 
    url: "https://www.umojab2b.com/",
    title: "Umoja - Professional eCommerce Solutions & Brand Development Services",
    description:
      "Leading B2B eCommerce platform and branding solutions for small businesses. Expert eCommerce website development, brand identity design, and digital branding strategies. Transform your business with our comprehensive eCommerce marketing services.",
    images: [
      {
        url: "https://ik.imagekit.io/y6vyyorps/PHOTO-2024-10-29-13-43-35%203.jpg?updatedAt=1730214693705",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umoja - Professional eCommerce Solutions & Brand Development Services",
    description: 
      "Leading B2B eCommerce platform and branding solutions for small businesses. Expert eCommerce website development, brand identity design, and digital branding strategies. Transform your business with our comprehensive eCommerce marketing services.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XQDJFQLNLM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQDJFQLNLM');
          `}
        </Script>
      </head>
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

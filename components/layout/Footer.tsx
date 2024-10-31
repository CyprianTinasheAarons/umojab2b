"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const footerLinks = {
  company: [{ label: "Blog", href: "https://blog.umojab2b.com" }],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  contact: [
    {
      label: "hello@umojab2b.com",
      href: "mailto:hello@umojab2b.com", 
      icon: <Mail className="h-4 w-4" />,
    },
    {
      label: "support@umojab2b.com",
      href: "mailto:support@umojab2b.com",
      icon: <Mail className="h-4 w-4" />,
    },
    {
      label: "sales@umojab2b.com", 
      href: "mailto:sales@umojab2b.com",
      icon: <Mail className="h-4 w-4" />,
    },
  ],
};

const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5 stroke-black" />,
    href: "https://facebook.com/umojab2b",
    label: "Facebook",
  },
  {
    icon: <Twitter className="h-5 w-5 stroke-black" />,
    href: "https://twitter.com/umojab2b",
    label: "Twitter",
  },
  {
    icon: <Instagram className="h-5 w-5 stroke-black" />,
    href: "https://instagram.com/umojab2b",
    label: "Instagram",
  },
  {
    icon: <Linkedin className="h-5 w-5 stroke-black" />,
    href: "https://linkedin.com/company/umojab2b",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 449.45 515.38"
      >
        <path
          fillRule="nonzero"
          d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
        />
      </svg>
    ),
    href: "https://tiktok.com/@umojab2b",
    label: "TikTok",
  },
];

export function Footer() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <button
        data-cal-namespace="15min"
        data-cal-link="cyprian-aarons-topiax/15min"
        data-cal-config='{"layout":"month_view"}'
        className="fixed bottom-8 left-8 z-50 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2 uppercase"
      >
        Book a Demo
      </button>

      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Umoja Logo"
                  width={100}
                  height={100}
                  className="mb-4"
                />
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Empowering businesses to thrive in the digital world with
                comprehensive online solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {contact.icon}
                      {contact.label}
                    </a>
                  </li>
                ))}
                <li className="text-sm text-muted-foreground">
                  Available on Email & WhatsApp
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8">
            <p className="text-sm text-center text-muted-foreground">
              © {new Date().getFullYear()} Umoja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

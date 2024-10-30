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
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "https://blog.umojab2b.com" },
  ],
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
      label: "+263 777 150 345",
      href: "tel:+263777150345",
      icon: <Phone className="h-4 w-4" />,
    },
    {
      label: "+263 771 535 326",
      href: "tel:+263771535326",
      icon: <Phone className="h-4 w-4" />,
    },
  ],
};

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
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

      <footer className="bg-muted/30">
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

"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const contactDetails = [
  {
    label: "hello@umojab2b.com",
    href: "mailto:hello@umojab2b.com",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    label: "+263 777 150 345",
    href: "tel:+263777150345",
    icon: <Phone className="h-6 w-6" />,
  },
  {
    label: "+263 771 535 326",
    href: "tel:+263771535326",
    icon: <Phone className="h-6 w-6" />,
  },
];

export default function Privacy() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 sm:py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Your privacy is important to us. This privacy policy explains how
              we collect, use, and protect your information.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Information Collection
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We collect information that you provide to us directly, such as
                when you create an account, update your profile, or make a
                purchase. We also collect information automatically, such as
                your IP address and browsing behavior.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Use of Information
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to protect
                our users.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Contact Us
              </h2>
              <ul className="space-y-4">
                {contactDetails.map((contact) => (
                  <li
                    key={contact.label}
                    className="flex items-center space-x-4"
                  >
                    {contact.icon}
                    <a
                      href={contact.href}
                      className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

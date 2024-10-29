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

export default function Terms() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 sm:py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Terms and Conditions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Please read these terms and conditions carefully before using our
              services.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                By accessing and using our services, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Modification of Terms
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We reserve the right to modify these terms at any time. You
                should check this page regularly to take notice of any changes
                we may have made to the Terms of Service.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Contact Information
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

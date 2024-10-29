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

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 sm:py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Empowering businesses to thrive in the digital world with
              comprehensive online solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/about-us.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                At Umoja, we aim to blend traditional African excellence with
                modern digital solutions to help businesses grow and succeed in
                the online world.
              </p>
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

"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const comparisons = [
  {
    feature: "Affordable Pricing",
    umojab2b: {
      text: "Starting at $249.99 (one-time) + $9.99/month",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Starting at $29/month but can add up over time",
      highlight: false,
      icon: Minus,
    },
    agency: {
      text: "High upfront cost, typically $500–$2000",
      highlight: false,
      icon: X,
    },
  },
  {
    feature: "Best for",
    umojab2b: {
      text: "Small to medium African businesses",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Larger businesses with high budgets",
      highlight: false,
      icon: Minus,
    },
    agency: {
      text: "Companies needing complex custom solutions",
      highlight: false,
      icon: Minus,
    },
  },
  {
    feature: "Setup & Maintenance",
    umojab2b: {
      text: "Simple, low-cost setup and easy monthly maintenance",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Ongoing monthly costs",
      highlight: false,
      icon: Minus,
    },
    agency: {
      text: "Expensive to set up and maintain",
      highlight: false,
      icon: X,
    },
  },
  {
    feature: "Essential Features",
    umojab2b: {
      text: "SEO, custom domain, admin panel, AI tools, branding kit, flexible payments",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Product management, payment options, app integrations",
      highlight: false,
      icon: Check,
    },
    agency: {
      text: "Tailored features, but costly",
      highlight: false,
      icon: Check,
    },
  },
  {
    feature: "Ease of Use",
    umojab2b: {
      text: "User-friendly and made for small businesses",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Easy-to-use platform with robust support",
      highlight: false,
      icon: Check,
    },
    agency: {
      text: "Varies, may require technical help",
      highlight: false,
      icon: X,
    },
  },
  {
    feature: "Branding Included",
    umojab2b: {
      text: "Complete branding kit provided",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Extra branding tools often require paid apps",
      highlight: false,
      icon: X,
    },
    agency: {
      text: "Full branding, but often expensive",
      highlight: false,
      icon: Check,
    },
  },
  {
    feature: "Support",
    umojab2b: {
      text: "Money-back guarantee if not satisfied",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "24/7 support available",
      highlight: false,
      icon: Check,
    },
    agency: {
      text: "Varies depending on the agency",
      highlight: false,
      icon: Minus,
    },
  },
  {
    feature: "Growth Potential",
    umojab2b: {
      text: "Designed to grow with your business, with add-ons for scaling",
      highlight: true,
      icon: Check,
    },
    shopify: {
      text: "Scales well with different pricing plans",
      highlight: false,
      icon: Check,
    },
    agency: {
      text: "Custom scaling possible but costly",
      highlight: false,
      icon: Minus,
    },
  },
];

export function Comparisons({ id }: { id: string }) {
  return (
    <section id={id} className="hidden sm:block py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#a16107]">
            Compare and Choose
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#713e12] sm:text-4xl">
            Why Choose UmojaB2B?
          </p>
          <p className="mt-6 text-lg leading-8 text-[#854c0e]">
            See how UmojaB2B compares to alternatives for African businesses
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-[#feef8a] bg-white shadow-sm">
          <div className="grid grid-cols-4 gap-px bg-[#fddf47]">
            <div className="bg-[#fef9c3] p-6">
              <span className="text-sm font-medium text-[#713e12]">
                Features
              </span>
            </div>
            <div className="bg-[#faca15]/20 p-6">
              <span className="text-sm font-semibold text-[#ca8804]">
                UmojaB2B
              </span>
            </div>
            <div className="bg-[#fef9c3] p-6">
              <span className="text-sm font-medium text-[#713e12]">
                Shopify
              </span>
            </div>
            <div className="bg-[#fef9c3] p-6">
              <span className="text-sm font-medium text-[#713e12]">
                Development Agency
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#feef8a]">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-4 gap-px"
              >
                <div className="bg-white p-6">
                  <span className="font-medium text-[#713e12]">
                    {comparison.feature}
                  </span>
                </div>
                <div
                  className={`bg-white p-6 ${
                    comparison.umojab2b.highlight ? "bg-[#faca15]/20" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <comparison.umojab2b.icon
                      className={`h-5 w-5 flex-shrink-0 ${
                        comparison.umojab2b.highlight
                          ? "text-[#ca8804]"
                          : "text-[#854c0e]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        comparison.umojab2b.highlight
                          ? "text-[#ca8804] font-medium"
                          : "text-[#854c0e]"
                      }`}
                    >
                      {comparison.umojab2b.text}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center gap-2">
                    <comparison.shopify.icon className="h-5 w-5 flex-shrink-0 text-[#854c0e]" />
                    <span className="text-sm text-[#854c0e]">
                      {comparison.shopify.text}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center gap-2">
                    <comparison.agency.icon className="h-5 w-5 flex-shrink-0 text-[#854c0e]" />
                    <span className="text-sm text-[#854c0e]">
                      {comparison.agency.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "How secure is my business data with Umoja B2B?",
    answer:
      "We prioritize your privacy and security. Umoja B2B uses industry-standard encryption and performs regular data backups to ensure that your information is safe. Your data will never be shared with third parties without your consent. For more details, you can view our full Privacy Policy here.",
  },
  {
    question: "Can I manage my business across multiple devices?",
    answer:
      "Absolutely! Umoja B2B is accessible on both desktop and mobile devices, allowing you to manage your inventory, track orders, and update your product listings from anywhere, anytime.",
  },
  {
    question: "What if I need help setting up my business on Umoja B2B?",
    answer:
      "We're here to support you. Our team offers onboarding assistance to get your business set up quickly and efficiently. Plus, our Help Center has step-by-step guides and tutorials, or you can reach out to our support team for personalized help.",
  },
  {
    question: "Are there any fees for listing my products on Umoja B2B?",
    answer:
      "It's free to list your products on Umoja B2B! We do charge a small transaction fee on sales made through the platform to cover operational costs and maintain our services. Contact our team for a detailed breakdown of fees.",
  },
  {
    question: "What payment methods are supported on Umoja B2B?",
    answer:
      "We support a variety of payment options tailored to African businesses, including mobile money, bank transfers, and traditional credit and debit card payments. We're continuously working to add more payment methods for convenience and security.",
  },
  {
    question: "How can Umoja B2B help grow my business?",
    answer:
      "We combine AI-driven cataloging with a powerful network of influencers to boost visibility for your products, reaching new customers and increasing sales. Plus, our tools help streamline your inventory management and customer service, so you can focus on growing your brand.",
  },
  {
    question: "What happens if I decide to leave Umoja B2B?",
    answer:
      "We'd hate to see you go, but you're free to close your account at any time. Your data remains secure, and we provide a simple process for exporting any information you may need. Reach out to support if you need assistance with this process.",
  },
];

export function Faq({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#cd9b01] to-[#fdc412] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#87690c] max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#ffe289] rounded-xl bg-white shadow-lg shadow-[#fef9e8] hover:shadow-xl hover:shadow-[#fff0c2] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left px-6 py-4 text-[#725a11] hover:text-[#cd9b01] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#87690c] px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

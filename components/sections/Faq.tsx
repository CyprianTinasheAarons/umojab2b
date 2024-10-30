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
    question: "Who is the Umoja Essentials Package best suited for?",
    answer:
      "The Umoja Essentials Package is designed for small to medium African businesses that want to establish an online presence quickly and affordably. This package provides everything needed to start selling online, including an e-commerce store, product catalog, and a branding kit.",
  },
  {
    question: "What's included in the Umoja Enterprise Package?",
    answer:
      "The Umoja Enterprise Package is built for businesses that require more advanced digital solutions. It includes all Essentials features plus an ERP system for comprehensive management, AI-powered automations, chatbots, and a full branding suite. This package is ideal for larger businesses looking to streamline and scale their operations.",
  },
  {
    question:
      "Can I upgrade from the Essentials Package to the Enterprise Package?",
    answer:
      "Yes, you can upgrade from the Umoja Essentials Package to the Umoja Enterprise Package at any time. Contact our support team to discuss your specific needs and arrange the upgrade.",
  },
  {
    question: "How quickly can my online store be ready to launch?",
    answer:
      "With the Umoja Essentials Package, your digital store can be ready in just a few days. Our streamlined setup process allows you to start reaching customers quickly without months of back-and-forth.",
  },
  {
    question: "Are there any limits to the products I can showcase?",
    answer:
      "The Umoja Essentials Package allows up to 30 products, ideal for smaller catalogs. With the Umoja Enterprise Package, you can showcase unlimited products, making it suitable for businesses with extensive inventories.",
  },
  {
    question: "Do I need technical skills to use these packages?",
    answer:
      "No technical skills are required! Both Umoja Essentials and Enterprise are designed with ease of use in mind. Our user-friendly admin panel, along with ongoing support, allows you to manage your store confidently.",
  },
  {
    question: "What types of payments can my customers use?",
    answer:
      "Our platform supports multiple payment options, including online payments and Cash on Delivery (COD), to meet the preferences of African customers.",
  },
  {
    question: "How will AI tools help my business?",
    answer:
      "The AI tools included in both packages assist with product presentation and cataloging, making it easier to manage and showcase your products professionally. In the Enterprise Package, additional AI automations, chatbots, and agents help streamline operations and enhance customer service.",
  },
  {
    question: "What is included in the Umoja Branding Kit?",
    answer:
      "The Umoja Branding Kit includes a professionally designed logo and a brand kit with colors, fonts, and templates, ensuring your business has a consistent and attractive look online.",
  },
  {
    question: "Do you offer customer support if I have questions?",
    answer:
      "Yes, Umoja offers dedicated customer support to assist you with setup, troubleshooting, and any questions as you grow your online business.",
  },
  {
    question: "Can I access the Umoja Marketplace with either package?",
    answer:
      "Yes, both the Essentials and Enterprise packages grant you access to the Umoja Marketplace, allowing you to connect with other African businesses and reach a wider audience.",
  },
  {
    question: "How do I know which package is right for me?",
    answer:
      "If you're a small to medium business looking to get started online with essential tools, Umoja Essentials is likely the right fit. For larger businesses or those needing advanced features like ERP, AI automations, and custom branding, Umoja Enterprise will provide the scalability and tools you need. Reach out to our team for a personalized recommendation!",
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

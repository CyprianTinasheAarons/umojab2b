"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "Is my data secure with Umoja?",
    answer: "Yes, we use industry-standard encryption to protect your information. Your business data is stored securely and is never shared with third parties without your consent."
  },
  {
    question: "How long does it take to set up my online store?",
    answer: "Once we have all your business information and products, we can set up your store within 3-5 business days. This includes your custom domain, product uploads, and payment integration."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support various payment methods including mobile money, bank transfers, and major credit cards. We can also integrate with popular local payment providers in your region."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, our team is available via email and chat to help you with any questions or issues. We also provide regular training sessions to help you make the most of your online store."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes, you can upgrade your package at any time to add more products or access additional features. Contact our support team for assistance with upgrades."
  }
];

export function Faq({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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
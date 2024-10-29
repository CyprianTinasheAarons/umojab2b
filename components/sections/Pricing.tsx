"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "249.99",
    monthly: "9.99",
    description: "Perfect for small businesses starting their online journey",
    features: [
      "Logo & Brand Kit",
      "Business Cards",
      "Landing Page",
      "Basic SEO",
      "10 Product Store",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "499.99",
    monthly: "19.99",
    description: "Ideal for growing businesses with more products",
    features: [
      "Everything in Starter",
      "30 Product Store",
      "Advanced SEO",
      "Social Media Kit",
      "Priority Support",
      "Marketing Consultation"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "999.99",
    monthly: "49.99",
    description: "For established businesses needing full-scale solutions",
    features: [
      "Everything in Professional",
      "Unlimited Products",
      "Custom Features",
      "Dedicated Support",
      "Monthly Strategy Calls",
      "Advanced Analytics"
    ]
  }
];

export function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className="py-12 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect package for your business needs
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <FadeIn key={plan.name}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className={`p-4 sm:p-6 rounded-3xl relative h-full flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl sm:text-4xl font-bold">${plan.price}</span>
                      <span className="text-sm text-muted-foreground">+ ${plan.monthly}/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="text-primary h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-3xl mt-auto" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
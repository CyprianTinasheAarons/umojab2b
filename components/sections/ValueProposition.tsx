"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const benefits = [
  {
    title: "Save Money",
    description: "Get $2000+ worth of services for just $249.99"
  },
  {
    title: "Save Time",
    description: "Launch your business online within days, not months"
  },
  {
    title: "Start Selling",
    description: "Begin accepting orders as soon as your store goes live"
  }
];

export function ValueProposition({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Package?</h2>
            <p className="text-lg text-muted-foreground">
              Get everything you need to start selling online at an unbeatable price
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 text-center h-full">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
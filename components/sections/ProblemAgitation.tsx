"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Globe, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const problems = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Limited Online Reach",
    description: "Unable to reach wider audiences due to lack of digital tools?"
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: "Stock Management",
    description: "Facing challenges with stock verification and payments?"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "E-commerce Challenges",
    description: "Difficulty accessing a reliable e-commerce platform tailored to African needs?"
  }
];

export function ProblemAgitation({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Common Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Are you experiencing these obstacles in your business journey?
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 text-center h-full">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="mb-6 text-primary inline-block"
                  >
                    {problem.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
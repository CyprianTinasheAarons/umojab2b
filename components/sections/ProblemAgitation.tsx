"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Globe, ShieldCheck, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const problems = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Limited Market Reach",
    description:
      "Struggling to expand your customer base beyond local markets? Missing out on regional and global opportunities?",
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: "Inventory Chaos",
    description:
      "Losing sales due to stock mix-ups? Tired of manual inventory tracking and order fulfillment errors?",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Payment & Trust Barriers",
    description:
      "Concerned about secure payments? Finding it hard to build customer trust in your online presence?",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Lost Revenue",
    description:
      "Missing out on growth opportunities due to outdated systems and disconnected business tools?",
  },
];

export function ProblemAgitation({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              African Businesses Are Being Left Behind
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t let outdated systems and fragmented solutions hold your
              business back. Are these challenges limiting your growth?
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="mb-6 text-primary inline-block"
                    >
                      {problem.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

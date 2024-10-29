"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, XCircle } from "lucide-react";

const competitors = [
  {
    name: "Traditional Agency",
    price: "$2,000+",
    features: {
      "Brand Design": true,
      "Website Development": true,
      "E-commerce Setup": true,
      "Quick Turnaround": false,
      "Affordable Price": false,
      "African Market Focus": false
    }
  },
  {
    name: "Umoja",
    price: "$249.99",
    features: {
      "Brand Design": true,
      "Website Development": true,
      "E-commerce Setup": true,
      "Quick Turnaround": true,
      "Affordable Price": true,
      "African Market Focus": true
    },
    highlight: true
  },
  {
    name: "Freelancer",
    price: "$500-1,500",
    features: {
      "Brand Design": true,
      "Website Development": true,
      "E-commerce Setup": false,
      "Quick Turnaround": false,
      "Affordable Price": false,
      "African Market Focus": false
    }
  }
];

export function Comparison({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Umoja?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we compare to other solutions in the market
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {competitors.map((competitor) => (
            <FadeIn key={competitor.name}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className={`p-6 rounded-3xl ${competitor.highlight ? 'border-primary' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{competitor.name}</h3>
                    <p className="text-2xl font-bold text-primary">{competitor.price}</p>
                  </div>
                  <ul className="space-y-4">
                    {Object.entries(competitor.features).map(([feature, available]) => (
                      <li key={feature} className="flex items-center gap-2">
                        {available ? (
                          <CheckCircle className="text-primary h-5 w-5" />
                        ) : (
                          <XCircle className="text-muted-foreground h-5 w-5" />
                        )}
                        <span className={available ? "" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
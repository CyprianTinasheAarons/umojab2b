"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const brandFeatures = [
  "Professional Logo Design",
  "Business Card Design",
  "Brand Style Guide",
  "Letterhead Template",
  "Invoice & Receipt Templates"
];

const digitalFeatures = [
  "Custom Domain Name",
  "Professional Landing Page",
  "E-commerce Store (30 Products)",
  "Admin Dashboard Access",
  "SEO Optimization"
];

const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function PackageDetails({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground">
              Everything included in our $249.99 package
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  show: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {brandFeatures.map((item) => (
                  <motion.li
                    key={item}
                    variants={listItem}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Presence</h3>
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  show: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {digitalFeatures.map((item) => (
                  <motion.li
                    key={item}
                    variants={listItem}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
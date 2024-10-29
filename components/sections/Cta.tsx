"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Cta() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your complete business package for just $249.99
            </p>
            <div className="flex gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg">
                  Get Started Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
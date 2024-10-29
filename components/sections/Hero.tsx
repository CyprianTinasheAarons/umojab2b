"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const features = [
  "Logo Design",
  "Business Cards",
  "Brand Toolkit",
  "Website & Domain",
  "SEO Optimization",
  "Online Store Setup",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 sm:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="flex justify-start">
                <div className="z-10 flex min-h-8 my-2">
                  <AnimatedGradientText>
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-sm font-semibold`
                      )}
                    >
                      Complete Business Package for $249.99
                    </span>
                  </AnimatedGradientText>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Empowering African Businesses to{" "}
                <span className="text-primary">Thrive Online</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Join thousands of small businesses across Africa taking their
                products to the world through Umoja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg rounded-3xl"
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-lg rounded-3xl"
                  >
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]"
            >
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-hsapir-1054655.jpg?updatedAt=1730215071294"
                alt="African Business Owner"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

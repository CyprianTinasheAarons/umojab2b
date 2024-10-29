"use client";

import { Palette, Globe, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

const features = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Brand Identity Package", 
    description: "Professional logo, business cards, letterhead, and complete brand toolkit inspired by African heritage"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Online Presence",
    description: "Custom landing page, domain name, and SEO optimization to reach customers worldwide"
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "E-commerce Solution",
    description: "Full online store setup with 30 products and easy-to-use admin dashboard"
  }
];

export function Features({ id }: { id?: string }) {
  return (
    <section id={id} className="py-12 sm:py-24 bg-background elephant-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="absolute left-0 top-0 opacity-10 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&q=80"
            alt="Elephant Silhouette"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Everything Your Business Needs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Blend traditional African excellence with modern digital solutions
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <GlassCard className={`p-6 sm:p-8 h-full`} hover>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 text-primary"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
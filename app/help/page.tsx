"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

const helpTopics = [
  {
    title: "Getting Started",
    description:
      "Learn how to set up your account and start using our services.",
  },
  {
    title: "Account Management",
    description:
      "Manage your account settings, subscriptions, and billing information.",
  },
  {
    title: "Using Our Services",
    description:
      "Detailed guides on how to use our various services and features.",
  },
  {
    title: "Troubleshooting",
    description:
      "Find solutions to common issues and get help with technical problems.",
  },
  {
    title: "Contact Support",
    description: "Reach out to our support team for personalized assistance.",
  },
];

export default function Help() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 sm:py-24 bg-background relative">
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                How Can We Help You?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Find answers to your questions and get the support you need.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {helpTopics.map((topic, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <GlassCard className={`p-6 sm:p-8 h-full`} hover>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="mb-6 text-primary"
                  >
                    <Image
                      src={`/icons/help/${topic.title
                        .toLowerCase()
                        .replace(/ /g, "-")}.svg`}
                      alt={topic.title}
                      width={40}
                      height={40}
                    />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {topic.description}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative py-12 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">
                Your Partner in African{" "}
                <span className="text-primary">Digital Commerce</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Umoja B2B, we help African entrepreneurs overcome digital
                commerce challenges and reach wider audiences.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Tailored for Africa",
                    description: "Solutions built for African market needs",
                  },
                  {
                    title: "Smart Tools",
                    description: "AI-powered cataloging and management",
                  },
                  {
                    title: "Growth Partner",
                    description: "Supporting your business expansion",
                  },
                  {
                    title: "Our Story",
                    description: "Turning untapped potential into real growth",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border"
                  >
                    <h3 className="text-base font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
                  alt="African entrepreneurs working together"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

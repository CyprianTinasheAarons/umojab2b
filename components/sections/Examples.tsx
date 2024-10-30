"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

const examples = [
  {
    name: "Munchies",
    image:
      "https://ik.imagekit.io/y6vyyorps/Screenshot%202024-10-30%20at%2017.01.20.png?updatedAt=1730300556340",
    description:
      "Premium chocolate company crafting high-quality vegan cookies and chocolate chips",
    url: "https://munchies-tinloof.vercel.app/",
  },
  {
    name: "Barrio",
    image:
      "https://ik.imagekit.io/y6vyyorps/Screenshot%202024-10-30%20at%2017.04.03.png?updatedAt=1730300654915",
    description: "Specialty coffee roaster featuring premium coffee blends",
    url: "https://barrio.lambdacurry.dev/",
  },
];

export function Examples({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-24 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Store <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore beautiful online stores powered by Umoja B2B&apos;s digital
            commerce platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={example.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => window.open(example.url, "_blank")}
              >
                <div className="relative h-[400px] mb-4">
                  <Image
                    src={example.image}
                    alt={example.name}
                    fill
                    className="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.name}</h3>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

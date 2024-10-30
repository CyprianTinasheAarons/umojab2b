"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { X } from "lucide-react";

const problems = [
  {
    title: "Limited Market Reach",
    description:
      "Your business is stuck serving only local customers when you could be reaching millions globally",
  },
  {
    title: "Inventory Chaos", 
    description:
      "Managing stock across multiple channels leads to overselling and unhappy customers",
  },
  {
    title: "Payment & Trust Barriers",
    description:
      "International customers hesitate to buy because they don't trust unfamiliar payment methods",
  },
  {
    title: "Lost Revenue",
    description:
      "Without a proper online presence, you're missing out on the $180B African ecommerce market",
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

        <div className="relative max-w-screen md:max-w-7xl mx-auto flex justify-center items-center min-h-[500px] md:min-h-[800px] -mx-4 md:mx-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/Leonardo_Phoenix_A_3D_pixelstyle_cartoon_of_a_sad_elephant_at_3.png?updatedAt=1730269556977"
                alt="Sad elephant illustration"
                fill
                style={{ objectFit: "contain" }}
                className="opacity-80"
              />
            </div>
          </div>

          <div className="absolute inset-0 max-w-screen overflow-hidden">
            {problems.map((problem, index) => {
              const angle = (index * 2 * Math.PI) / problems.length;
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Card className="p-3 md:p-6 text-center backdrop-blur-sm bg-background/80 relative max-w-[140px] md:max-w-[280px]">
                    <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1">
                      <X className="text-white w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                      {problem.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

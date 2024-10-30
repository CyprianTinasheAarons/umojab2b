"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { X } from "lucide-react";

const problems = [
  {
    title: "Limited Online Presence", 
    description: "No online presence means missing out on potential customers",
  },
  {
    title: "High Costs of Going Digital",
    description:
      "Traditional web development is expensive for small businesses",
  },
  {
    title: "Complex Tools and Platforms",
    description: "Most digital tools are too complicated to use effectively",
  },
  {
    title: "Lack of Support and Training",
    description: "No guidance on how to use digital tools properly",
  },
];

export function ProblemAgitation({ id }: { id?: string }) {
  return (
    <section id={id} className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t Let Your Business Fall Behind
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Many African businesses struggle to keep up with changing times.
              Are these issues holding you back?
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-full mx-auto flex justify-center items-center min-h-[400px] md:min-h-[800px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[300px] h-[300px] md:w-[800px] md:h-[800px]">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/Leonardo_Phoenix_A_3D_pixelstyle_cartoon_of_a_sad_elephant_at_3.png?updatedAt=1730269556977"
                alt="Sad elephant illustration"
                fill
                style={{ objectFit: "contain" }}
                className="opacity-80"
              />
            </div>
          </div>
          <div className="absolute inset-0 hidden md:block">
            {problems.map((problem, index) => {
              const angle = (index * 2 * Math.PI) / problems.length;
              const radius =
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 60 // Reduced radius significantly for mobile
                  : 250;
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
                  <Card className="p-1.5 md:p-6 text-center backdrop-blur-sm bg-background/80 relative max-w-[80px] md:max-w-[280px]">
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 rounded-full p-0.5 md:p-1">
                      <X className="text-white w-2.5 h-2.5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-[8px] md:text-lg font-semibold mb-0.5 md:mb-2 line-clamp-2">
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
        <div className="flex flex-col gap-4 md:hidden mt-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-4 backdrop-blur-sm bg-background/80 relative">
              <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1">
                <X className="text-white w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{problem.title}</h3>
              <p className="text-xs text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

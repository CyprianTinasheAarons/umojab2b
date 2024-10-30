"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-[#cd9b01]" />,
    title: "Save Money",
    description:
      "Get all the tools you need at a low price. Our package includes everything to help your business grow online.",
    before: "Paying too much for different tools",
    after: "One low price for everything you need",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#cd9b01]" />,
    title: "Start Quick",
    description:
      "Get your business online fast. We help you launch in just a few days.",
    before: "Waiting too long for your website",
    after: "Ready to sell in just days",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#cd9b01]" />,
    title: "Made for Africa",
    description:
      "Built just for African businesses. We know what works in local markets.",
    before: "Tools not made for Africa",
    after: "Perfect fit for African business",
  },
];

export function ValueProposition({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-[#fef9e8] relative">
      <div className="container mx-auto px-4 mb-16">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-[#433405] mb-4">
              Transform Your Business
            </h2>
            <p className="text-lg text-[#725a11] max-w-2xl mx-auto">
              Join hundreds of African businesses boosting their digital
              presence with our complete, tailored solution
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto z-40">
          {benefits.map((benefit) => (
            <FadeIn key={benefit.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="p-8 h-full bg-white rounded-3xl flex flex-col">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#433405] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#725a11] mb-6 flex-1">
                    {benefit.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-[#725a11]">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-500">✕</span>
                      </div>
                      {benefit.before}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#cd9b01] mx-auto" />
                    <div className="flex items-center gap-3 text-sm font-medium text-[#433405]">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-500">✓</span>
                      </div>
                      {benefit.after}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] z-1">
        <Image
          src="https://ik.imagekit.io/y6vyyorps/Leonardo_Phoenix_A_3D_pixelstyle_cartoon_of_a_happy_elephant_s_0.png?updatedAt=1730269556999"
          alt="Happy elephant"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

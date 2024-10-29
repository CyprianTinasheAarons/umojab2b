"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-[#cd9b01]" />,
    title: "Save Money",
    description:
      "Get enterprise-level services at a fraction of the cost. Our all-in-one package delivers maximum value for less.",
    before: "Spending thousands on separate services",
    after: "One affordable package for everything",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#cd9b01]" />,
    title: "Launch Faster",
    description:
      "Stop waiting months to get online. We'll have your complete digital presence ready within days, not months.",
    before: "Months of back-and-forth with agencies",
    after: "Live and selling in just days",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#cd9b01]" />,
    title: "African-Focused",
    description:
      "Built specifically for African businesses. We create solutions that resonate with local markets and customers.",
    before: "Generic solutions that don't fit",
    after: "Tailored for African success",
  },
];

export function ValueProposition({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-[#fef9e8]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#433405] mb-4">
              Transform Your Business
            </h2>
            <p className="text-lg text-[#725a11] max-w-2xl mx-auto">
              Join hundreds of African businesses that have transformed their
              digital presence with our complete solution
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
    </section>
  );
}

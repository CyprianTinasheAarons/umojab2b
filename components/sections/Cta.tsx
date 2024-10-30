"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Cta() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#ffd245] to-[#e7b005] text-[#433405]">
      <div className="absolute inset-0 bg-[url('/patterns/african-pattern.svg')] opacity-5" />
      <div className="container mx-auto px-4 text-center relative">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your African Business Vision into Reality
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-[#725a11]">
              Join thousands of African entrepreneurs building their digital
              presence with Umoja B2B Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg bg-[#433405] hover:bg-[#725a11] text-[#fff0c2] w-full sm:w-auto px-8"
                >
                  Start Your Digital Journey
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-[#433405] text-[#433405] hover:bg-[#433405] hover:text-[#fff0c2] w-full sm:w-auto px-8"
                  data-cal-namespace="15min"
                  data-cal-link="cyprian-aarons-topiax/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

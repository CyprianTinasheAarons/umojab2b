"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Star } from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const features = [
  "Professional Logo",
  "Custom Website",
  "E-commerce Store",
  "SEO Optimization",
  "Social Media Integration",
  "24/7 Support",
];

export function Hero() {
  const router = useRouter();
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 sm:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="flex justify-center">
                <div className="z-10 flex min-h-8 my-2">
                  <AnimatedGradientText>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold">
                        Starting from
                      </span>
                      <span className="mx-2 text-xl font-bold">$499.99 🎉</span>
                    </div>
                  </AnimatedGradientText>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Helping African Businesses{" "}
                <span className="text-primary">Succeed Online</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Get affordable tools to reach more customers, grow your brand,
                and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg rounded-3xl"
                    onClick={() => router.push("/store")}
                  >
                    Get Started Today
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
                    data-cal-namespace="15min"
                    data-cal-link="cyprian-aarons-topiax/15min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    See How It Works
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative aspect-video">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fef9e8]/80 to-[#fff0c2]/80 p-[2px] shadow-lg shadow-[#cd9b01]/20 backdrop-blur-md">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ffd245] to-[#cd9b01]/30 opacity-10 blur-xl" />
                <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
                  <div className="w-full h-[calc(100%+2px)] -pt-[1px]">
                    <video
                      src="/food.webm"
                      className="w-full h-full rounded-3xl object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

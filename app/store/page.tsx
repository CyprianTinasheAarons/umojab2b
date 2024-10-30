"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function StorePage() {
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
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-12">Our Store</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/store/business-package.jpg"
                  alt="Complete Business Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Complete Business Package</h3>
                <p className="text-muted-foreground mb-4">Get everything you need to start your online business</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$249.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/store/logo-design.jpg"
                  alt="Logo Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Logo Design</h3>
                <p className="text-muted-foreground mb-4">Professional logo design for your brand</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$99.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </motion.div>

            {/* Product Card 3 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/store/website-package.jpg"
                  alt="Website Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Website Package</h3>
                <p className="text-muted-foreground mb-4">Custom website with domain and hosting</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$199.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

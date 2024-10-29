"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

const testimonials = [
  {
    quote: "Umoja has helped me grow my sales by 30% in just 3 months! I can now focus on quality and production while they handle the rest.",
    author: "Tariro M.",
    role: "Local Artisan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80"
  },
  {
    quote: "The complete package was exactly what my business needed. From branding to online sales, everything was handled professionally.",
    author: "Samuel K.",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80"
  },
  {
    quote: "Thanks to Umoja, my handmade products are now reaching customers across Africa. The platform is easy to use and the support is amazing.",
    author: "Grace N.",
    role: "Craft Business Owner",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&q=80"
  }
];

export function Testimonials({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses like yours are thriving with Umoja
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
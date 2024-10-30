"use client";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { About } from "@/components/sections/About";
// import { PaymentMethod } from "@/components/sections/PaymentMethod";
import { Examples } from "@/components/sections/Examples";
import { Comparisons } from "@/components/sections/Comparisons";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <ProblemAgitation id="problems" />
      <ValueProposition id="benefits" />
      <Features id="features" />
      {/* <PaymentMethod id="payment-methods" /> */}
      <About id="about" />
      <Examples id="examples" />
      <Comparisons id="comparisons" />
      <Pricing id="pricing" />
      <Faq id="faq" />
      <Cta />
    </main>
  );
}

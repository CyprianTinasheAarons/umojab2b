"use client";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { About } from "@/components/sections/About";
export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <ProblemAgitation id="problems" />
      <ValueProposition id="benefits" />
      <Features id="features" />
      <About id="about" />
      <Pricing id="pricing" />
      <Faq id="faq" />
      <Cta />
    </main>
  );
}

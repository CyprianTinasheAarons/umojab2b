"use client";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { PackageDetails } from "@/components/sections/PackageDetails";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <ProblemAgitation id="problems" />
      <Features id="features" />
      <PackageDetails id="package" />
      <Pricing id="pricing" />
      <Comparison id="comparison" />
      <ValueProposition id="benefits" />
      <Testimonials id="testimonials" />
      <Faq id="faq" />
      <Cta />
    </main>
  );
}
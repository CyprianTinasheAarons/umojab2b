"use client";

import { Button } from "@/components/ui/button";
import {
  SparklesIcon,
  StarIcon,
  RocketLaunchIcon,
  TrophyIcon,
  FireIcon,
  BoltIcon,
  HeartIcon,
  GiftIcon,
} from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Umoja Essentials",
    id: "tier-essentials",
    mainIcon: <RocketLaunchIcon className="h-8 w-8 text-[#fdc412]" />,
    description:
      "Perfect for small African businesses ready to go digital and expand their reach.",
    setupPrice: "$249.99",
    monthlyPrice: "$9.99",
    href: "/store",
    features: [
      { icon: <StarIcon className="h-4 w-4" />, text: "SEO for Visibility" },
      { icon: <GiftIcon className="h-4 w-4" />, text: "Domain & Landing Page" },
      {
        icon: <BoltIcon className="h-4 w-4" />,
        text: "Umoja Shop & Admin Panel",
      },
      { icon: <HeartIcon className="h-4 w-4" />, text: "Flexible Payments" },
      {
        icon: <FireIcon className="h-4 w-4" />,
        text: "Host up to 30 Products",
      },
      {
        icon: <SparklesIcon className="h-4 w-4" />,
        text: "AI Tools for Product Presentation",
      },
      { icon: <TrophyIcon className="h-4 w-4" />, text: "Umoja Branding Kit" },
      {
        icon: <RocketLaunchIcon className="h-4 w-4" />,
        text: "Marketplace Access",
      },
    ],
    featured: true,
  },
  {
    name: "Umoja Enterprise",
    id: "tier-enterprise",
    mainIcon: <TrophyIcon className="h-8 w-8 text-[#fdc412]" />,
    description:
      "Ideal for growing African enterprises needing powerful, AI-driven digital tools for expansion.",
    setupPrice: "Contact us",
    monthlyPrice: "Custom",
    href: "/enterprise",
    features: [
      {
        icon: <StarIcon className="h-4 w-4" />,
        text: "Everything in Umoja Essentials",
      },
      { icon: <BoltIcon className="h-4 w-4" />, text: "Umoja ERP System" },
      {
        icon: <FireIcon className="h-4 w-4" />,
        text: "Advanced AI Automation",
      },
      {
        icon: <HeartIcon className="h-4 w-4" />,
        text: "AI Omnichannel Customer Service",
      },
      {
        icon: <GiftIcon className="h-4 w-4" />,
        text: "Complete Branding & Creative Suite",
      },
      {
        icon: <SparklesIcon className="h-4 w-4" />,
        text: "Unlimited Product Management",
      },
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Pricing({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-[#cd9b01]">
          Build Your Brand
        </h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#725a11] sm:text-6xl">
          Branding Solutions for Every Business
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-[#87690c] sm:text-xl/8">
        From logos to complete online stores, we help you build a strong brand
        presence that grows with your business.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-white shadow-2xl scale-105 z-10 border-2 border-[#fdc412]"
                : " sm:mx-4 lg:mx-0",
              "rounded-3xl p-8 ring-1 ring-[#ffe289]/20 sm:p-10",
              tier.featured
                ? "transition-transform hover:scale-110 focus:scale-110"
                : ""
            )}
          >
            <div className="flex flex-col items-center mb-6">
              {tier.mainIcon}
              <h3
                id={tier.id}
                className="text-2xl font-semibold text-[#cd9b01] mt-2"
              >
                {tier.name}
              </h3>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#725a11]">
                {tier.setupPrice}
              </p>
              <p className="text-sm text-[#87690c]">one-time setup</p>
              <p className="mt-2 text-lg font-semibold text-[#cd9b01]">
                + {tier.monthlyPrice}/month
              </p>
            </div>
            <p className="mt-6 text-base/7 text-center text-[#87690c]">
              {tier.description}
            </p>
            <ul role="list" className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <span className="text-[#fdc412]">{feature.icon}</span>
                  <span className="text-sm text-[#a37d05]">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => {
                window.location.href = tier.href;
              }}
              className={classNames(
                tier.featured
                  ? "bg-[#fdc412] text-white hover:bg-[#cd9b01]"
                  : "bg-white text-[#cd9b01] ring-1 ring-inset ring-[#fdc412] hover:bg-[#fff0c2] hover:text-[#a37d05]",
                "mt-8 w-full rounded-full sm:mt-10"
              )}
            >
              Get Started
            </Button>
            <p className="mt-4 text-xs text-center text-[#87690c]">
              Satisfaction guaranteed or your money back
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export function Features({ id }: { id?: string }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-[#cd9b01]">
          Our Popular Package
        </h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-[#433405] sm:text-5xl">
          Everything you need to grow online
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <Link href="/services/branding">
                <Image
                  alt="Brand Identity"
                  src="https://ik.imagekit.io/y6vyyorps/Screenshot%202024-10-30%20at%2009.47.22.png?updatedAt=1730274595218"
                  width={800}
                  height={600}
                  className="h-80 object-cover object-left"
                />
              </Link>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#cd9b01]">
                  Brand Identity
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#433405]">
                  Professional Branding
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#725a11]">
                  Complete brand toolkit including logo, business cards, and
                  letterhead inspired by African heritage.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <Link href="/services/web">
                <Image
                  alt="Web Presence"
                  src="https://ik.imagekit.io/y6vyyorps/Screenshot%202024-10-30%20at%2009.46.16.png?updatedAt=1730274595913"
                  width={800}
                  height={600}
                  className="h-80 object-cover object-left lg:object-right"
                />
              </Link>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#cd9b01]">
                  Online Presence
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#433405]">
                  Custom Website
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#725a11]">
                  Professional landing page with domain name and SEO
                  optimization to reach customers worldwide.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-b-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-b-[calc(2rem+1px)]">
              <Link href="/services/ecommerce">
                <Image
                  alt="E-commerce"
                  src="https://ik.imagekit.io/y6vyyorps/Screenshot%202024-10-30%20at%2009.49.07.png?updatedAt=1730274594478"
                  width={1600}
                  height={900}
                  className="h-80 object-cover object-center"
                />
              </Link>
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#cd9b01]">
                  E-commerce
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#433405]">
                  Full Online Store
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#725a11]">
                  Complete online store setup with product management and
                  easy-to-use admin dashboard.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-b-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

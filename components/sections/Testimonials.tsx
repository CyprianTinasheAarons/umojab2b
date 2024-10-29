"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Aisha",
    username: "@aisha_africa",
    body: "Umoja has transformed my business. I've gained so many new customers, and managing orders is a breeze!",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "Kofi",
    username: "@kofi_trader",
    body: "As a small business owner, Umoja helped me scale in ways I never thought possible. Fantastic platform!",
    img: "https://avatar.vercel.sh/kofi",
  },
  {
    name: "Nia",
    username: "@nia_designs",
    body: "The cataloging feature is a game-changer. My products now look as professional as the big brands.",
    img: "https://avatar.vercel.sh/nia",
  },
  {
    name: "Kwame",
    username: "@kwame_online",
    body: "Umoja has made handling inventory and customer orders so simple. I finally have time to grow my business!",
    img: "https://avatar.vercel.sh/kwame",
  },
  {
    name: "Fatima",
    username: "@fatima_market",
    body: "I trust Umoja to handle all my online sales. Their system is reliable, and my customers are happy!",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "Esi",
    username: "@esi_ghana",
    body: "Finally, an e-commerce solution that understands African markets. Umoja has been a real blessing.",
    img: "https://avatar.vercel.sh/esi",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-[#433405]/[.1] bg-[#433405]/[.01] hover:bg-[#433405]/[.05]",
        // dark styles
        "dark:border-[#fef9e8]/[.1] dark:bg-[#fef9e8]/[.10] dark:hover:bg-[#fef9e8]/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-[#fef9e8]">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-[#fef9e8]/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials({ id }: { id: string }) {
  return (
    <section id={id} className="py-24">
      <div className=" px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FAF8F4] dark:from-[#171717]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FAF8F4] dark:from-[#171717]"></div>
        </div>
      </div>
    </section>
  );
}

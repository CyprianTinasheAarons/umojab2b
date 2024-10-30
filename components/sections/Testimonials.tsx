"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Aisha",
    username: "@aisha_africa",
    body: "Umoja has transformed my business. I've gained so many new customers, and managing orders is a breeze!",
    img: "https://avatar.vercel.sh/aisha",
    source: "Facebook",
    rating: 5
  },
  {
    name: "Kofi",
    username: "@kofi_trader", 
    body: "As a small business owner, Umoja helped me scale in ways I never thought possible. Fantastic platform!",
    img: "https://avatar.vercel.sh/kofi",
    source: "Google",
    rating: 5
  },
  {
    name: "Nia",
    username: "@nia_designs",
    body: "The cataloging feature is a game-changer. My products now look as professional as the big brands.",
    img: "https://avatar.vercel.sh/nia",
    source: "Facebook",
    rating: 5
  },
  {
    name: "Kwame",
    username: "@kwame_online",
    body: "Umoja has made handling inventory and customer orders so simple. I finally have time to grow my business!",
    img: "https://avatar.vercel.sh/kwame", 
    source: "Google",
    rating: 5
  },
  {
    name: "Fatima",
    username: "@fatima_market",
    body: "I trust Umoja to handle all my online sales. Their system is reliable, and my customers are happy!",
    img: "https://avatar.vercel.sh/fatima",
    source: "Facebook",
    rating: 5
  },
  {
    name: "Esi",
    username: "@esi_ghana",
    body: "Finally, an e-commerce solution that understands African markets. Umoja has been a real blessing.",
    img: "https://avatar.vercel.sh/esi",
    source: "Google",
    rating: 5
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  source,
  rating
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  source: string;
  rating: number;
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
          <div className="flex items-center gap-1">
            <p className="text-xs font-medium dark:text-[#fef9e8]/40">
              {username}
            </p>
            <span className="text-xs text-gray-400">•</span>
            <p className="text-xs font-medium dark:text-[#fef9e8]/40">
              {source}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-1 flex">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials({ id }: { id: string }) {
  return (
    <section id={id} className="py-24">
      <div className="px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
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

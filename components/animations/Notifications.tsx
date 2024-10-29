"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { useEffect, useState, useRef } from "react";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications = [
  {
    name: "New Order",
    description: "Umoja Store",
    time: "15m ago",
    icon: "🛍️",
    color: "#00C9A7",
  },
  {
    name: "Store Launch",
    description: "Umoja Store",
    time: "10m ago",
    icon: "🚀",
    color: "#FFB800",
  },
  {
    name: "Payment Success",
    description: "Umoja Store",
    time: "5m ago",
    icon: "💳",
    color: "#FF3D71",
  },
  {
    name: "New Customer",
    description: "Umoja Store",
    time: "2m ago",
    icon: "👤",
    color: "#1E86FF",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white shadow-sm",
        "transform-gpu animate-in slide-in-from-right"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-600">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function Notifications({ className }: { className?: string }) {
  const [currentNotification, setCurrentNotification] = useState<Item | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY < lastScrollY.current &&
        currentIndex >= notifications.length
      ) {
        // User scrolled up, reset index to show notifications again
        setCurrentIndex(0);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex >= notifications.length) return;

    const showNotification = () => {
      setCurrentNotification(notifications[currentIndex]);

      // Hide after 3 seconds
      setTimeout(() => {
        setCurrentNotification(null);
        setCurrentIndex((prev) => prev + 1);
      }, 3000);
    };

    const timer = setTimeout(showNotification, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!currentNotification) return null;

  return (
    <div
      className={cn(
        "fixed top-20 right-4 z-50 flex h-auto w-[400px] flex-col p-4 overflow-hidden rounded-lg bg-transparent",
        className
      )}
    >
      <AnimatedList>
        <Notification {...currentNotification} key={currentIndex} />
      </AnimatedList>
    </div>
  );
}

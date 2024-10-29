"use client";

import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-last lg:order-first">
            <div>
              <p className="text-primary font-semibold text-lg">Error</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                Something went wrong!
              </h1>
              <p className="text-lg text-muted-foreground mt-6 max-w-lg mx-auto lg:mx-0">
                {error.message ||
                  "An unexpected error occurred. Please try again."}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={reset}
                  className="w-full sm:w-auto text-lg rounded-3xl bg-primary text-white px-6 py-3 hover:bg-primary/90"
                >
                  Try Again
                </button>
                <a href="/help" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto text-lg rounded-3xl border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3">
                    Contact Support
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-hsapir-1054655.jpg?updatedAt=173021507129"
                alt="Error Illustration"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

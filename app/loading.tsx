import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-last lg:order-first">
            <div>
              <Skeleton className="h-8 w-20 bg-primary/10" />
              <Skeleton className="h-16 w-full max-w-lg mt-4" />
              <Skeleton className="h-24 w-full max-w-lg mt-6" />
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Skeleton className="h-14 w-full sm:w-36" />
                <Skeleton className="h-14 w-full sm:w-36" />
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <Skeleton className="aspect-[4/3] w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
} 
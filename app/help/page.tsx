import { MessageCircle, Bug, Monitor } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-[#433405] sm:text-5xl">
          How can we help?
        </h2>
        <p className="mt-2 text-lg/8 text-[#725a11]">
          Get support from our team through any of these channels
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdc412]">
            <MessageCircle className="h-6 w-6 text-[#433405]" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-[#433405]">
              Chat with Sales
            </h3>
            <p className="mt-2 text-base/7 text-[#725a11]">
              Learn more about our business packages and how we can help your
              business grow online. Our sales team is ready to assist.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-[#cd9b01] hover:text-[#a37d05]">
                Start a conversation <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdc412]">
            <Bug className="h-6 w-6 text-[#433405]" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-[#433405]">
              Report an Issue
            </h3>
            <p className="mt-2 text-base/7 text-[#725a11]">
              Found something not working as expected? Let us know and
              we&apos;ll fix it right away to ensure smooth operations.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-[#cd9b01] hover:text-[#a37d05]">
                Submit a report <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdc412]">
            <Monitor className="h-6 w-6 text-[#433405]" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-[#433405]">
              Technical Support
            </h3>
            <p className="mt-2 text-base/7 text-[#725a11]">
              Need help with your website or online store? Our technical team is
              available 24/7 to assist you.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-[#cd9b01] hover:text-[#a37d05]">
                Get support <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

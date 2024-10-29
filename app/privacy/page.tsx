"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function Privacy() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#433405] mb-12">
              Privacy Policy
            </h1>

            <div className="prose prose-lg prose-yellow max-w-none">
              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-[#87690c] mb-6">
                We collect information that you provide directly to us,
                including your name, email address, and any other information
                you choose to provide when using our services.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-[#87690c] mb-6">
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and protect our
                users and services.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-[#87690c] mb-6">
                We do not sell or rent your personal information to third
                parties. We may share your information only in circumstances
                described in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                4. Data Security
              </h2>
              <p className="text-[#87690c] mb-6">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                5. Cookies
              </h2>
              <p className="text-[#87690c] mb-6">
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information to improve
                your experience.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                6. Your Rights
              </h2>
              <p className="text-[#87690c] mb-6">
                You have the right to access, update, or delete your personal
                information. You can also opt out of receiving promotional
                communications from us.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-[#87690c] mb-6">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>

              <div className="mt-12 p-6 bg-[#fff0c2] rounded-lg border border-[#ffd245]">
                <h3 className="text-xl font-semibold text-[#a37d05] mb-3">
                  Contact Us
                </h3>
                <p className="text-[#cd9b01]">
                  If you have any questions about this Privacy Policy, please
                  contact us at support@umojab2b.com
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

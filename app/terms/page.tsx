"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function Terms() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#433405] mb-12">
              Terms of Service
            </h1>

            <div className="prose prose-lg prose-yellow max-w-none">
              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                1. Terms
              </h2>
              <p className="text-[#87690c] mb-6">
                By accessing this Website, you are agreeing to be bound by these
                Website Terms and Conditions of Use and agree that you are
                responsible for the agreement with any applicable local laws.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                2. Use License
              </h2>
              <p className="text-[#87690c] mb-6">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Umoja&apos;s Website for
                personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                3. Disclaimer
              </h2>
              <p className="text-[#87690c] mb-6">
                All the materials on Umoja&apos;s Website are provided &quot;as
                is&quot;. Umoja makes no warranties, may it be expressed or
                implied, therefore negates all other warranties.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                4. Limitations
              </h2>
              <p className="text-[#87690c] mb-6">
                Umoja or its suppliers will not be held accountable for any
                damages that will arise with the use or inability to use the
                materials on Umoja&apos;s Website.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                5. Revisions
              </h2>
              <p className="text-[#87690c] mb-6">
                The materials appearing on Umoja&apos;s Website may include
                technical, typographical, or photographic errors. Umoja will not
                promise that any of the materials in this Website are accurate,
                complete, or current.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                6. Links
              </h2>
              <p className="text-[#87690c] mb-6">
                Umoja has not reviewed all of the sites linked to its Website
                and is not responsible for the contents of any such linked site.
                The presence of any link does not imply endorsement by Umoja of
                the site.
              </p>

              <h2 className="text-2xl font-semibold text-[#725a11] mt-8 mb-4">
                7. Site Terms of Use Modifications
              </h2>
              <p className="text-[#87690c] mb-6">
                Umoja may revise these Terms of Use for its Website at any time
                without prior notice. By using this Website, you are agreeing to
                be bound by the current version of these Terms and Conditions of
                Use.
              </p>

              <div className="mt-12 p-6 bg-[#fff0c2] rounded-lg border border-[#ffd245]">
                <h3 className="text-xl font-semibold text-[#a37d05] mb-3">
                  Questions?
                </h3>
                <p className="text-[#cd9b01]">
                  If you have any questions about these Terms of Service, please
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

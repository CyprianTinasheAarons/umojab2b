"use client";

export default function AboutPage() {
  return (
    <div className="bg-[#fef9e8] ">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-[#fef9e8] to-[#fff0c2] pt-14 min-h-screen">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-[#fdc412]/10 ring-1 ring-[#ffe289] sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-[#433405] sm:text-6xl mb-8">
                Building Africa&apos;s Business Future
              </h1>

              <div className="prose prose-lg text-[#725a11] max-w-none">
                <p className="lead">
                  Welcome to Umoja B2B, the innovative platform created by{" "}
                  <strong>Kapture</strong> and <strong>Africai</strong> to
                  redefine commerce for African businesses. Driven by a shared
                  passion for empowering Africa&apos;s economy, we&apos;ve
                  combined our strengths in design, data, and AI to build a
                  revolutionary ecosystem that supports seamless, scalable B2B
                  operations across the continent.
                </p>

                <h2 className="text-2xl font-semibold text-[#433405] mt-12 mb-4">
                  The Vision Behind Umoja B2B
                </h2>
                <p>
                  In Africa, traditional e-commerce solutions have struggled to
                  succeed due to inventory challenges, capital limitations, and
                  gaps in digital trust. Umoja B2B addresses these issues
                  head-on, providing a centralized platform where businesses can
                  connect, trade, and grow with confidence.
                </p>

                <h2 className="text-2xl font-semibold text-[#433405] mt-12 mb-4">
                  How Kapture and Africai Came Together
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-white/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Kapture</h3>
                    <p>
                      Known for its dedication to cataloging African businesses
                      and products, Kapture brings a keen focus on design and a
                      deep understanding of African commerce needs.
                    </p>
                  </div>
                  <div className="bg-white/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Africai</h3>
                    <p>
                      Africai&apos;s expertise in artificial intelligence
                      enables Umoja B2B to harness the power of data and machine
                      learning for smart, real-time insights.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-[#433405] mt-12 mb-4">
                  Why Choose Umoja B2B?
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#cd9b01]">•</span>
                    <span>
                      <strong>A Centralized Platform:</strong> Manage inventory,
                      orders, and payments in one place
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#cd9b01]">•</span>
                    <span>
                      <strong>Seamless AI Integration:</strong> Access
                      AI-powered insights for better decision making
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#cd9b01]">•</span>
                    <span>
                      <strong>Expanded Reach:</strong> Connect with local and
                      international clients
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#cd9b01]">•</span>
                    <span>
                      <strong>Reliable & Trusted:</strong> A platform businesses
                      can depend on
                    </span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#433405] mt-12 mb-4">
                  Leadership
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-white/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      Rodney Manyepa
                    </h3>
                    <p className="text-[#725a11]">CEO of Kapture</p>
                  </div>
                  <div className="bg-white/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      Cyprian Aarons
                    </h3>
                    <p className="text-[#725a11]">CEO of Africai</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h2 className="text-2xl font-semibold text-[#433405] mb-4">
                    Join Us in Redefining African Commerce
                  </h2>
                  <p className="text-lg">
                    Discover how Umoja B2B can help your business reach new
                    heights. Together, we&apos;re building Africa&apos;s next
                    generation of commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2, Truck, CreditCard, Settings } from "lucide-react";

const paymentMethods = [
  {
    name: "Pesapal",
    description:
      "Leading East African payment gateway offering secure transactions through mobile wallets and credit cards with real-time settlements.",
    icon: "/pesapal.png",
  },
  {
    name: "EcoCash", 
    description:
      "Zimbabwe's top mobile payment solution supporting local and international transactions, bill payments and remittances through their Home Wallet feature.",
    icon: "/ecocash.svg",
  },
  {
    name: "InnBucks",
    description:
      "Growing digital wallet in Zimbabwe with cash services at TM Pick n Pay branches. Offers competitive fees and user-friendly mobile app.",
    icon: "/innbucks.webp",
  },
  {
    name: "Bank Transfer",
    description:
      "Direct bank-to-bank transfers with improved online banking interfaces for secure large transactions.",
    icon: Building2,
  },
  {
    name: "Cash on Delivery",
    description:
      "Pay upon delivery option allowing customers to verify purchases before payment.",
    icon: Truck,
  },
  {
    name: "Store Credit",
    description:
      "Store funds for future purchases, integrated with loyalty programs for flexible payment options.",
    icon: CreditCard,
  },
  {
    name: "PayPal & Stripe",
    description:
      "Global payment processors supporting multiple currencies, credit cards, digital wallets and international transactions with advanced fraud protection.",
    icon: CreditCard,
  },
];

export function PaymentMethod({ id }: { id: string }) {
  return (
    <section id={id} className="bg-[#fefce8] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-[#a16107]">
          Flexible Payments
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-[#713e12] sm:text-5xl">
          Multiple Payment Methods for Your Business
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group hover:scale-[1.02] transition-transform duration-300 ${
                index === 0
                  ? "lg:row-span-2"
                  : index === 6
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div className="absolute inset-px rounded-lg bg-[#fef9c3] group-hover:bg-[#feef8a] transition-colors duration-300"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 relative shrink-0 p-2 bg-white rounded-full shadow-lg">
                      {typeof method.icon === "string" ? (
                        <Image
                          src={method.icon}
                          alt={method.name}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <method.icon className="w-full h-full text-[#ca8804]" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold flex items-center gap-2 text-[#854c0e]">
                      {method.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm/6 text-[#713e12]">
                    {method.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-md ring-1 ring-[#faca15]/20 group-hover:shadow-lg group-hover:ring-[#faca15]/40 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-[#e7af08] hover:bg-[#ca8804] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => (window.location.href = "/store")}
          >
            Start Accepting Payments Today
          </Button>
        </div>
      </div>
    </section>
  );
}

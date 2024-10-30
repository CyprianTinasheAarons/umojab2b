"use client";

import { useState } from "react";
import { Check, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  productsRange: string;
  onlinePresence: string[];
  goals: string;
  termsAccepted: boolean;
};

export default function Component() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_8197xxj", // Replace with your EmailJS service ID
        "template_2eruane", // Replace with your EmailJS template ID
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          business_name: data.businessName,
          business_type: data.businessType,
          products_range: data.productsRange,
          online_presence: data.onlinePresence?.join(", "),
          goals: data.goals,
        },
        "F3QxeQ5EZyrDJn0AQ" // Your public key
      );
      
      setShowConfirmation(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Optionally add error handling UI
    }
  };

  return (
    <div className="min-h-screen bg-background my-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="p-4">
          {/* Mobile view - single image */}
          <div className="md:hidden">
            <Image
              src="https://ik.imagekit.io/y6vyyorps/sutirta-budiman-Jgiv1rSIpVM-unsplash.jpg?updatedAt=1730288853233"
              alt="Business Solutions"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>

          {/* Desktop view - grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-followalice-667200.jpg?updatedAt=1730288852382"
                alt="Business Solutions"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
                alt="Feature 1"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-hsapir-1109900.jpg?updatedAt=1730288850876"
                alt="Feature 2"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
              <Image
                src="https://ik.imagekit.io/y6vyyorps/zoo-5348334_1280.jpg?updatedAt=1730288849020"
                alt="Feature 3"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-shelaghmurphy-2883380.jpg?updatedAt=1730288850870"
                alt="Feature 4"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Get Started with the Umoja Essentials Package
              </h1>
              <p className="text-lg text-muted-foreground">
                Let us know more about your business to help you build your
                digital presence quickly and affordably.
              </p>
            </div>

            {/* Package Features */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Package Features</h2>
                <Badge variant="secondary">Essential Features</Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Basic e-commerce store with catalog management",
                  "Branding kit with logo design",
                  "SEO-ready landing page setup",
                  "Localized payment options",
                ].map((feature) => (
                  <Card key={feature} className="bg-primary/5">
                    <CardContent className="p-4 flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Tell Us About Your Business</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      rules={{ required: "Full name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        rules={{ required: "Email is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="businessName"
                      rules={{ required: "Business name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Business Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="businessType"
                        rules={{ required: "Business type is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select business type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[
                                  "Retail",
                                  "Service",
                                  "Agriculture",
                                  "Manufacturing",
                                  "Other",
                                ].map((type) => (
                                  <SelectItem
                                    key={type}
                                    value={type.toLowerCase()}
                                  >
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="productsRange"
                        rules={{ required: "Number of products is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Products</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {["1-10", "11-30", "31-50", "50+"].map(
                                  (range) => (
                                    <SelectItem key={range} value={range}>
                                      {range}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specific Goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your specific needs and goals..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      rules={{
                        required: "You must accept the terms and conditions",
                      }}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <Link
                                href="/terms"
                                className="text-primary hover:text-primary/90 underline"
                                target="_blank"
                              >
                                Terms of Service
                              </Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full">
                      Submit Inquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-semibold">Fast Setup Guarantee</h3>
                  </div>
                  <p className="text-sm">
                    Get your online store up and running within 48 hours of
                    approval.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You for Your Inquiry!</DialogTitle>
            <DialogDescription>
              Our team will review your information and reach out to you shortly
              to discuss the next steps.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setShowConfirmation(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

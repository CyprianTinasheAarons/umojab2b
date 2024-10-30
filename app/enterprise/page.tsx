"use client";

import { useState } from "react";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
  companyName: string;
  industry: string;
  monthlyRevenue: string;
  currentSolutions: string[];
  businessGoals: string;
  specificNeeds: string;
  termsAccepted: boolean;
};

export default function Component() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_8197xxj", // Replace with your EmailJS service ID
        "template_5nippco", // Replace with your EmailJS template ID
        {
          from_name: data.fullName,
          to_name: "Admin", // Or whatever recipient name you want
          from_email: data.email,
          phone: data.phone,
          company: data.companyName,
          industry: data.industry,
          revenue: data.monthlyRevenue,
          goals: data.businessGoals,
          needs: data.specificNeeds,
        },
        "F3QxeQ5EZyrDJn0AQ" // Your public key
      );

      console.log("Email sent successfully");
      setShowConfirmation(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Optionally add error handling UI here
    }
  };

  const enterpriseFeatures = [
    {
      title: "Full ERP Integration",
      description: "Seamlessly manage inventory, finances, and HR operations",
    },
    {
      title: "Advanced E-commerce",
      description: "AI-driven product cataloging with marketplace integration",
    },
    {
      title: "AI Automation Suite",
      description: "Smart chatbots and agents for enhanced customer service",
    },
    {
      title: "Complete Branding",
      description: "Professional logos, guidelines, and creative toolkit",
    },
  ];

  return (
    <div className="min-h-screen bg-background my-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="p-4">
          {/* Mobile view - single image */}
          <div className="md:hidden">
            <Image
              src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
              alt="Enterprise Solutions"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>

          {/* Desktop view - grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
                alt="Enterprise Solutions"
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
                src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
                alt="Feature 2"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
                alt="Feature 3"
                width={400}
                height={196}
                className="rounded-lg object-cover w-full h-[196px]"
              />
              <Image
                src="https://ik.imagekit.io/y6vyyorps/pexels-thatguycraig000-1670045.jpg?updatedAt=1730279064967"
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
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Take Your Business to the Next Level with Umoja Enterprise
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Fill out the form below to explore how our comprehensive
                solutions can support your growth.
              </p>
              <p className="text-muted-foreground">
                Our Enterprise package is meticulously crafted for established
                businesses seeking to streamline operations, enhance customer
                engagement, and scale sustainably. Let us help you transform
                your digital presence with our enterprise-grade solutions.
              </p>
            </div>

            {/* Package Features */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Enterprise Features</h2>
                <Badge variant="secondary">Premium Solutions</Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {enterpriseFeatures.map((feature) => (
                  <Card key={feature.title} className="bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-1">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Tell Us About Your Enterprise</CardTitle>
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
                                placeholder="you@company.com"
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
                      name="companyName"
                      rules={{ required: "Company name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="industry"
                        rules={{ required: "Industry is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[
                                  "Manufacturing",
                                  "Retail",
                                  "E-commerce",
                                  "Technology",
                                  "Healthcare",
                                  "Finance",
                                  "Education",
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
                        name="monthlyRevenue"
                        rules={{
                          required: "Monthly revenue range is required",
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monthly Revenue Range</FormLabel>
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
                                {[
                                  "$10k - $50k",
                                  "$50k - $100k",
                                  "$100k - $500k",
                                  "$500k+",
                                ].map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="businessGoals"
                      rules={{ required: "Business goals are required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your growth aspirations and operational challenges..."
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
                      name="specificNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Specific Needs or Customizations
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about any specific requirements or areas you'd like us to address..."
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
                      Request a Consultation
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
                    <Star className="w-5 h-5" />
                    <h3 className="font-semibold">Enterprise Support</h3>
                  </div>
                  <p className="text-sm">
                    Get priority access to our dedicated enterprise support team
                    and personalized onboarding assistance.
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
            <DialogTitle>Thank You for Your Interest!</DialogTitle>
            <DialogDescription>
              One of our enterprise solutions specialists will contact you
              within 24 hours to discuss your business needs and how we can
              support your transformation journey.
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

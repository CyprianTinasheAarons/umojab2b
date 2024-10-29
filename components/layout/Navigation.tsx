"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // Add framer-motion import

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Package", href: "#package" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'border-b border-primary/10 shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=40&h=40&q=80"
              alt="Elephant Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <a href="/" className="text-xl sm:text-2xl font-bold text-primary">
              Umoja
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/10"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
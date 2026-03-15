"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-dark rounded-full px-6 py-3 border-white/10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            RAZA FANCY STEEL
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-industrial-steel",
                pathname === item.href ? "text-white" : "text-white/70"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black/95 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-white hover:text-industrial-steel"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

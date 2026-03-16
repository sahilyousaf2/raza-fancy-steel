"use client";

import { motion } from "framer-motion";
import {
  Warehouse,
  Sun,
  Layers,
  Flame,
  Settings,
  Wrench,
  ArrowUpRight
} from "lucide-react";
import NextImage from "next/image";

const services = [
  {
    title: "Warehouse Shed Fabrication",
    description: "Heavy-duty industrial warehouse sheds designed for maximum durability and structural integrity.",
    icon: Warehouse,
    image: "/images/whereshoude-shed.webp",
  },
  {
    title: "Solar Panel Structure",
    description: "Custom-engineered mounting structures for solar panels, optimized for wind load and longevity.",
    icon: Sun,
    image: "/images/solar-penal.jpg",
  },
  {
    title: "Fiber Glass Work",
    description: "Premium fiberglass solutions for industrial and commercial roofing and partitions.",
    icon: Layers,
    image: "/images/fiber-glass.jpeg",
  },
  {
    title: "Fire Fighting Pipeline",
    description: "NFPA compliant firefighting pipeline systems for industrial complexes and warehouses.",
    icon: Flame,
    image: "/images/fire-fighting.webp",
  },
  {
    title: "Stainless Steel Fancy Work",
    description: "High-end stainless steel decorative work for modern homes and commercial spaces.",
    icon: Settings,
    image: "/images/ss-fancy-work.jpg",
  },
  {
    title: "Custom Welding Solutions",
    description: "Precision TIG, MIG, and Arc welding services for specialized industrial requirements.",
    icon: Wrench,
    image: "/images/custom.webp",
  },
];

export function ServiceCards() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-industrial-steel font-bold tracking-widest uppercase text-sm"
          >
            Core Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
          >
            OUR PREMIUM <br /> INDUSTRIAL SERVICES
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <NextImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-industrial-steel transition-colors">
                  <service.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

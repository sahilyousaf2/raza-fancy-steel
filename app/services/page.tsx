"use client";

import { motion } from "framer-motion";
import {
    Warehouse,
    Sun,
    Layers,
    Flame,
    Settings,
    Wrench,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import Link from "next/link";



const services = [
    {
        id: 1,
        title: "Warehouse Shed Fabrication",
        shortDescription: "Heavy-duty industrial warehouse sheds designed for maximum durability and structural integrity.",
        fullDescription: "Our warehouse shed fabrication services encompass complete design, engineering, and construction of industrial storage facilities. We utilize high-grade steel materials and modern fabrication techniques to create structures that withstand harsh weather conditions and heavy loads. Our warehouses are designed for optimal space utilization, easy loading/unloading operations, and long-term durability.",
        icon: Warehouse,
        image: "/images/whereshoude-shed.webp",
        features: [
            "Custom design solutions",
            "Pre-engineered building systems",
            "Structural steel framing",
            "Roofing and wall systems",
            "Insulation options",
            "Ventilation systems"
        ]
    },
    {
        id: 2,
        title: "Solar Panel Structure Installation",
        shortDescription: "Custom-engineered mounting structures for solar panels, optimized for wind load and longevity.",
        fullDescription: "We specialize in designing and installing robust solar panel mounting structures that maximize energy efficiency while ensuring structural integrity. Our solutions are engineered to withstand local wind loads, seismic activity, and environmental factors. From rooftop installations to ground-mounted solar farms, we provide end-to-end solutions for commercial and industrial solar projects.",
        icon: Sun,
        image: "/images/solar-penel.webp",
        features: [
            "Fixed tilt mountings",
            "Tracking systems",
            "Ground-mounted structures",
            "Roof-mounted solutions",
            "Wind load optimization",
            "Corrosion-resistant materials"
        ]
    },
    {
        id: 3,
        title: "Fiber Glass Work",
        shortDescription: "Premium fiberglass solutions for industrial and commercial roofing and partitions.",
        fullDescription: "Our fiberglass work services provide lightweight, durable, and corrosion-resistant solutions for various industrial applications. We specialize in fiberglass roofing, partitions, panels, and custom fabrications. These products offer excellent thermal insulation, chemical resistance, and are ideal for environments where traditional materials would deteriorate.",
        icon: Layers,
        image: "/images/fiber-glass.webp",
        features: [
            "Fiberglass roofing sheets",
            "Custom panel fabrication",
            " partitions and enclosures",
            "Chemical-resistant applications",
            "Thermal insulation",
            " translucent panels"
        ]
    },
    {
        id: 4,
        title: "Fire Fighting Pipeline Systems",
        shortDescription: "NFPA compliant firefighting pipeline systems for industrial complexes and warehouses.",
        fullDescription: "We design and install comprehensive fire fighting pipeline systems that meet NFPA standards and local fire safety regulations. Our services include sprinkler systems, hydrant systems, fire pumps, and hose reel systems. We work closely with fire safety consultants to ensure complete compliance and maximum protection for your facility.",
        icon: Flame,
        image: "/images/fire-fighting.webp",
        features: [
            "Sprinkler system installation",
            "Fire hydrant systems",
            "Fire pump systems",
            "Hose reel systems",
            "NFPA compliance",
            "Regular maintenance services"
        ]
    },
    {
        id: 5,
        title: "Stainless Steel Fancy Work",
        shortDescription: "High-end stainless steel decorative work for modern homes and commercial spaces.",
        fullDescription: "Our stainless steel fancy work division creates stunning architectural elements for residential and commercial projects. From decorative railings and partitions to custom furniture and signage, we combine precision engineering with aesthetic design. We work with various grades of stainless steel including 304, 316, and decorative finishes.",
        icon: Settings,
        image: "/images/ss-fancy-work.jpg",
        features: [
            "Decorative railings",
            "Custom partitions",
            "Architectural elements",
            "Interior fixtures",
            "Various finishes",
            "Custom fabrication"
        ]
    },
    {
        id: 6,
        title: "Custom Welding Solutions",
        shortDescription: "Precision TIG, MIG, and Arc welding services for specialized industrial requirements.",
        fullDescription: "Our custom welding services cover a wide range of industrial needs, from structural welding to precision fabrication. We employ certified welders proficient in TIG, MIG, MIG, and Arc welding techniques. Our workshop is equipped with modern welding equipment capable of handling projects of various scales and complexity.",
        icon: Wrench,
        image: "/images/welding.webp",
        features: [
            "TIG welding",
            "MIG welding",
            "Arc welding",
            "Structural welding",
            "Custom fabrication",
            "Welding certification"
        ]
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/images/whereshoude-shed.webp')" }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase border border-white/20 rounded-full glass">
                            Our Services
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            COMPREHENSIVE <br />
                            <span className="text-industrial-steel">FABRICATION SOLUTIONS</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                            From industrial warehouse sheds to custom welding, we provide end-to-end steel fabrication
                            services tailored to your specific requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/10">
                                            <service.icon className="text-industrial-steel w-7 h-7" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                            {service.title}
                                        </h2>
                                    </div>

                                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                        {service.fullDescription}
                                    </p>

                                    <div className="mb-8">
                                        <h3 className="text-white font-semibold mb-4">Key Features</h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3 text-zinc-400 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-industrial-steel shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-industrial-steel transition-colors"
                                    >
                                        Get Quote <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-zinc-950 rounded-3xl p-12 md:p-20 border border-white/10"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            READY TO START YOUR PROJECT?
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
                            Contact us today for a free consultation and quote. Our team of experts is ready to help you with all your steel fabrication needs.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            Get a Free Quote
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

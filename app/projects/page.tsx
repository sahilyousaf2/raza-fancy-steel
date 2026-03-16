"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Warehouse Shed Fabrication",
        category: "Warehouse Fabrication",
        description: "Heavy-duty industrial warehouse sheds designed for maximum durability and structural integrity. Custom design solutions with pre-engineered building systems.",
        image: "/images/whereshoude-shed.webp",
        location: "Shaukat tenndery zone, Sialkot",
        year: "2026",
    },
    {
        id: 2,
        title: "Solar Panel Structure Installation",
        category: "Solar Installation",
        description: "Custom-engineered mounting structures for solar panels, optimized for wind load and longevity. Ground-mounted and roof-mounted solutions.",
        image: "/images/solar-penel.webp",
        location: "DHA Pahse-4 ,Karachi",
        year: "2025",
    },
    {
        id: 3,
        title: "Fiber Glass Work",
        category: "Industrial Fabrication",
        description: "Premium fiberglass solutions for industrial and commercial roofing and partitions. Chemical-resistant applications with thermal insulation.",
        image: "/images/fiber-glass.webp",
        location: "Port Qasim, Karachi",
        year: "2025",
    },
    {
        id: 4,
        title: "Fire Fighting Pipeline Systems",
        category: "Fire Fighting",
        description: "NFPA compliant firefighting pipeline systems for industrial complexes and warehouses. Sprinkler, hydrant, and fire pump systems.",
        image: "/images/fire-fighting.webp",
        location: "Korangi Industrial Area, Karachi",
        year: "2025",
    },
    {
        id: 5,
        title: "Stainless Steel Fancy Work",
        category: "Fancy Work",
        description: "High-end stainless steel decorative work for modern homes and commercial spaces. Decorative railings, partitions, and architectural elements.",
        image: "/images/ss-fancy-work.jpg",
        location: "DHA, Karachi",
        year: "2025",
    },
    {
        id: 6,
        title: "Custom Welding Solutions",
        category: "Welding Services",
        description: "Precision TIG, MIG, and Arc welding services for specialized industrial requirements. Structural welding and custom fabrication.",
        image: "/images/welding.webp",
        location: "Workshop, Karachi",
        year: "2025",
    },
];

export default function ProjectsPage() {
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
                            Our Projects
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            FEATURED <br />
                            <span className="text-industrial-steel">PORTFOLIO</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Explore our extensive portfolio of successful projects delivered across Pakistan.
                            Each project reflects our commitment to quality and excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-industrial-steel/50 transition-all duration-500"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-industrial-steel text-white text-xs font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4">
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowUpRight className="text-white w-5 h-5" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-steel transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {project.year}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "200+", label: "Projects Completed" },
                            { number: "25+", label: "Years Experience" },
                            { number: "50+", label: "Team Members" },
                            { number: "100%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-industrial-steel mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-zinc-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Korangi Industrial Warehouse Complex",
        category: "Warehouse Fabrication",
        description: "Large-scale warehouse shed fabrication with modern steel structural design spanning 50,000 sq ft. Completed with advanced engineering solutions for maximum durability.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        location: "Korangi Industrial Area, Karachi",
        year: "2024",
    },
    {
        id: 2,
        title: "Solar Power Plant Structures",
        category: "Solar Installation",
        description: "Installation of 500kW solar panel mounting structures with precision engineering for maximum efficiency. Ground-mounted system with tracking capabilities.",
        image: "https://images.unsplash.com/photo-1509391366360-fe5bb6585e2b?auto=format&fit=crop&q=80",
        location: "Sindh, Pakistan",
        year: "2023",
    },
    {
        id: 3,
        title: "Port Qasim Steel Fabrication",
        category: "Industrial Fabrication",
        description: "Custom heavy-duty steel fabrication for industrial machinery and equipment supports. Complex welding and precision engineering for port equipment.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        location: "Port Qasim, Karachi",
        year: "2023",
    },
    {
        id: 4,
        title: "Commercial Building Steel Works",
        category: "Structural Steel",
        description: "Complete steel structural framework for multi-story commercial building in Karachi. State-of-the-art fabrication with modern safety standards.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
        location: "Clifton, Karachi",
        year: "2022",
    },
    {
        id: 5,
        title: "Stainless Steel Interior Project",
        category: "Fancy Work",
        description: "Premium stainless steel decorative work for luxury hotel and restaurant interiors. Custom railings, partitions, and architectural elements.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
        location: "DHA, Karachi",
        year: "2022",
    },
    {
        id: 6,
        title: "Fire Safety Pipeline System",
        category: "Fire Fighting",
        description: "Comprehensive fire fighting pipeline installation for industrial complex with NFPA compliance. Complete sprinkler and hydrant system installation.",
        image: "https://images.unsplash.com/photo-1599708153386-62e27f09da51?auto=format&fit=crop&q=80",
        location: "Landhi Industrial Area, Karachi",
        year: "2021",
    },
    {
        id: 7,
        title: " textile Factory Warehouse",
        category: "Warehouse Fabrication",
        description: "Custom warehouse shed for textile manufacturing unit. Special ventilation design and structural engineering for industrial use.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
        location: " SITE Area, Karachi",
        year: "2021",
    },
    {
        id: 8,
        title: "Pharmaceutical Facility Steel Work",
        category: "Industrial Fabrication",
        description: "Stainless steel piping and structural work for pharmaceutical manufacturing facility. Clean room compatible fabrication.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        location: "Korangi, Karachi",
        year: "2020",
    },
    {
        id: 9,
        title: "Shopping Mall Structural Work",
        category: "Structural Steel",
        description: "Complete steel structural framework for premium shopping mall. Complex design with large span trusses and modern aesthetics.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        location: "Gulshan-e-Iqbal, Karachi",
        year: "2020",
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
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')" }}
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

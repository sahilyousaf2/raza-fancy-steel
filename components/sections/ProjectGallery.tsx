"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import NextImage from "next/image";

const projects = [
    {
        id: 1,
        title: "Korangi Industrial Warehouse Complex",
        description: "Large-scale warehouse shed fabrication with modern steel structural design spanning 50,000 sq ft.",
        image: "/images/whereshoude-shed.webp",
    },
    {
        id: 2,
        title: "Solar Power Plant Structures",
        description: "Installation of 500kW solar panel mounting structures with precision engineering for maximum efficiency.",
        image: "/images/solar-penel.webp",
    },
    {
        id: 3,
        title: "Port Qasim Steel Fabrication",
        description: "Custom heavy-duty steel fabrication for industrial machinery and equipment supports.",
        image: "/images/ss-work.webp",
    },
    {
        id: 4,
        title: "Commercial Building Steel Works",
        description: "Complete steel structural framework for multi-story commercial building in Karachi.",
        image: "/images/fiber-glass.webp",
    },
    {
        id: 5,
        title: "Stainless Steel Interior Project",
        description: "Premium stainless steel decorative work for luxury hotel and restaurant interiors.",
        image: "/images/ss-fancy-work.jpg",
    },
    {
        id: 6,
        title: "Fire Safety Pipeline System",
        description: "Comprehensive fire fighting pipeline installation for industrial complex with NFPA compliance.",
        image: "/images/fire-fighting.webp",
    },
];

export function ProjectGallery() {
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
                        Our Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        FEATURED <br /> PROJECTS
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <NextImage
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-300 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex items-center text-white text-sm font-bold">
                                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <ArrowUpRight className="text-white w-5 h-5" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

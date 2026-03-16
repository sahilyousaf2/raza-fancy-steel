"use client";

import { motion } from "framer-motion";
import { User, Briefcase } from "lucide-react";
import NextImage from "next/image";

const team = [
    {
        id: 3,
        name: "Adrine Paul",
        role: "Site Supervisor",
        description: "Overseeing all on-site operations ensuring projects are delivered on time with highest standards.",
        image: "/images/welding.webp",
        icon: User,
    },
    {
        id: 4,
        name: "Sahil Yousaf",
        role: "Accountant Manager",
        description: "Managing financial operations and ensuring transparent dealings with all stakeholders.",
        image: "/images/ss-work.webp",
        icon: User,
    },
    {
        id: 5,
        name: "Azhar Hafeez",
        role: "Manager",
        description: "Handling client relations and project coordination with dedication and professionalism.",
        image: "/images/fiber-glass.webp",
        icon: Briefcase,
    },
];

export function TeamSection() {
    return (
        <section className="py-32 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-industrial-steel font-bold tracking-widest uppercase text-sm"
                    >
                        Our Team
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        MEET THE <br /> TEAM
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 hover:border-industrial-steel/50 transition-all duration-500"
                        >
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <NextImage
                                    src={member.image}
                                    alt={`${member.name} - ${member.role} at Raza Fancy Steel`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <member.icon className="text-industrial-steel w-6 h-6 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-industrial-steel text-sm font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-zinc-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

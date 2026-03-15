"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Award } from "lucide-react";
import NextImage from "next/image";

const team = [
    {
        id: 1,
        name: "Yousaf Mohan",
        role: "Founder",
        description: "Established the company in 2000 with a vision to provide premium steel fabrication services across Pakistan.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        icon: Award,
    },
    {
        id: 2,
        name: "Raza Yousaf",
        role: "CEO",
        description: "Leading the company's strategic growth and expanding operations nationwide with focus on quality.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        icon: Briefcase,
    },
    {
        id: 3,
        name: "Adrine Paul",
        role: "Site Supervisor",
        description: "Overseeing all on-site operations ensuring projects are delivered on time with highest standards.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        icon: User,
    },
    {
        id: 4,
        name: "Sahil Yousaf",
        role: "Accountant Manager",
        description: "Managing financial operations and ensuring transparent dealings with all stakeholders.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
        icon: User,
    },
    {
        id: 5,
        name: "Azhar Hafeez",
        role: "Manager",
        description: "Handling client relations and project coordination with dedication and professionalism.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
        icon: Briefcase,
    },
];

export function TeamSection() {
    return (
        <section className="py-32 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
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
                        LEADERSHIP <br /> & TEAM
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 hover:border-industrial-steel/50 transition-all duration-500"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <NextImage
                                    src={member.image}
                                    alt={`${member.name} - ${member.role} at Raza Fancy Steel`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                                />
                            </div>

                            <div className="p-6">
                                <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-industrial-steel transition-colors">
                                    <member.icon className="text-white w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-industrial-steel text-sm font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-zinc-500 text-xs leading-relaxed">
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

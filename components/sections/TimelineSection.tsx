"use client";

import { motion } from "framer-motion";
import { Factory, TrendingUp, Globe, Award } from "lucide-react";

const milestones = [
    {
        year: "2000",
        title: "Company Founded",
        description: "Yousaf Mohan established Raza Fancy Steel with a vision to provide premium steel fabrication services in Karachi.",
        icon: Factory,
    },
    {
        year: "2010",
        title: "Industrial Expansion",
        description: "Expanded operations to serve major industrial clients across Sindh with warehouse and factory setups.",
        icon: TrendingUp,
    },
    {
        year: "2020",
        title: "Nationwide Projects",
        description: "Completed large-scale projects across Pakistan including solar structures and commercial complexes.",
        icon: Globe,
    },
    {
        year: "Today",
        title: "Leading Provider",
        description: "Serving clients nationwide with a reputation for quality, reliability, and professional craftsmanship.",
        icon: Award,
    },
];

export function TimelineSection() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(255,255,255,0.1) 100px,
            rgba(255,255,255,0.1) 101px
          )`
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-industrial-steel font-bold tracking-widest uppercase text-sm"
                    >
                        Our Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        COMPANY <br /> TIMELINE
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-industrial-steel to-transparent hidden md:block" />

                    <div className="space-y-12 md:space-y-0">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Side */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="p-8 bg-zinc-900 rounded-3xl border border-white/10 hover:border-industrial-steel/30 transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-12 h-12 bg-industrial-steel/20 rounded-2xl flex items-center justify-center ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                                                <milestone.icon className="text-industrial-steel w-6 h-6" />
                                            </div>
                                            <span className="text-3xl font-black text-industrial-steel">{milestone.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-950 border-2 border-industrial-steel rounded-full items-center justify-center">
                                    <div className="w-2 h-2 bg-industrial-steel rounded-full" />
                                </div>

                                {/* Empty Space for opposite side */}
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

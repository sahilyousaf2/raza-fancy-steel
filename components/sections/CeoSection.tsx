"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Users, Target, Award } from "lucide-react";
import NextImage from "next/image";

export function CeoSection() {
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
                        Leadership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        CEO'S <br /> MESSAGE
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10">
                                <Briefcase className="text-industrial-steel w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white">
                                    Raza Yousaf
                                </h3>
                                <p className="text-industrial-steel font-semibold">Chief Executive Officer</p>
                            </div>
                        </div>

                        <div className="relative bg-zinc-950 rounded-3xl p-8 border border-white/10 mb-8">
                            <div className="absolute top-6 left-6 text-6xl text-industrial-steel/20 font-serif">"</div>
                            <p className="text-zinc-300 text-lg leading-relaxed italic relative z-10 pl-8">
                                "We are committed to pushing the boundaries of innovation in steel fabrication. 
                                Our goal is not just to meet expectations, but to exceed them on every project we undertake."
                            </p>
                        </div>

                        <div className="space-y-6 text-zinc-400 leading-relaxed">
                            <p>
                                <strong className="text-white">Raza Yousaf</strong> took the helm as CEO with a clear 
                                vision: to transform Raza Fancy Steel into a nationally recognized leader in industrial 
                                fabrication while honoring the legacy built by his father.
                            </p>
                            <p>
                                Under his leadership, the company has expanded its capabilities, embraced modern 
                                technologies, and strengthened its commitment to quality and customer satisfaction.
                            </p>
                            <p>
                                With a focus on innovation, sustainability, and excellence, Raza continues to drive 
                                the company forward, ensuring that Raza Fancy Steel remains at the forefront of the 
                                industry for generations to come.
                            </p>
                        </div>

                        {/* Leadership Qualities */}
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-2xl border border-white/10">
                                <Trophy className="text-industrial-steel w-6 h-6 shrink-0" />
                                <div>
                                    <div className="text-white font-semibold text-sm">Excellence</div>
                                    <div className="text-zinc-500 text-xs">Quality First</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-2xl border border-white/10">
                                <Users className="text-industrial-steel w-6 h-6 shrink-0" />
                                <div>
                                    <div className="text-white font-semibold text-sm">Leadership</div>
                                    <div className="text-zinc-500 text-xs">Team Focus</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-2xl border border-white/10">
                                <Target className="text-industrial-steel w-6 h-6 shrink-0" />
                                <div>
                                    <div className="text-white font-semibold text-sm">Innovation</div>
                                    <div className="text-zinc-500 text-xs">Modern Solutions</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-950 p-4 rounded-2xl border border-white/10">
                                <Award className="text-industrial-steel w-6 h-6 shrink-0" />
                                <div>
                                    <div className="text-white font-semibold text-sm">Integrity</div>
                                    <div className="text-zinc-500 text-xs">Trust Always</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:order-2"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                            <NextImage
                                src="/images/welding.webp"
                                alt="Raza Yousaf - CEO of Raza Fancy Steel"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        
                        {/* Experience Badge */}
                        <div className="absolute -top-6 -right-6 bg-zinc-950 p-6 rounded-3xl border border-white/10">
                            <div className="text-center">
                                <div className="text-4xl font-black text-industrial-steel">25+</div>
                                <div className="text-white text-sm font-semibold">Years Legacy</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

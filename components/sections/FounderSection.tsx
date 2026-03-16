"use client";

import { motion } from "framer-motion";
import { Award, Quote, Heart } from "lucide-react";
import NextImage from "next/image";

export function FounderSection() {
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
                        Our Founder
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        IN LOVING <br /> MEMORY
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
                            <NextImage
                                src="/images/ss-fancy-work.jpg"
                                alt="Yousaf Mohan - Founder of Raza Fancy Steel"
                                fill
                                className="object-cover grayscale"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                        
                        {/* Memorial Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-6 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-industrial-steel rounded-full flex items-center justify-center">
                                    <Heart className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">In Memoriam</div>
                                    <div className="text-zinc-500 text-sm">Forever in our hearts</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/10">
                                <Award className="text-industrial-steel w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white">
                                    Late Yousaf Mohan
                                </h3>
                                <p className="text-industrial-steel font-semibold">Founder (1965 - 2023)</p>
                            </div>
                        </div>

                        <div className="relative bg-zinc-900 rounded-3xl p-8 border border-white/10 mb-8">
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-industrial-steel/30" />
                            <p className="text-zinc-300 text-lg leading-relaxed italic relative z-10 pl-4">
                                "Our vision was simple: to provide world-class steel fabrication services 
                                to industries across Pakistan. Quality and integrity were the foundations 
                                upon which we built this company."
                            </p>
                        </div>

                        <div className="space-y-6 text-zinc-400 leading-relaxed">
                            <p>
                                <strong className="text-white">Yousaf Mohan</strong> established Raza Fancy Steel in 2000 
                                with a simple yet powerful vision: to deliver excellence in steel fabrication and build 
                                lasting relationships based on trust and quality.
                            </p>
                            <p>
                                Starting from a modest workshop, his dedication to craftsmanship and customer satisfaction 
                                transformed the company into one of Pakistan's most trusted names in industrial fabrication.
                            </p>
                            <p>
                                His legacy continues to inspire every member of our team. We honor his memory by upholding 
                                the values he instilled in us - integrity, quality, and unwavering commitment to excellence.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10">
                            <div className="text-center">
                                <div className="text-3xl font-black text-industrial-steel">25+</div>
                                <div className="text-zinc-500 text-sm">Years of Legacy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-industrial-steel">200+</div>
                                <div className="text-zinc-500 text-sm">Projects Built</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-industrial-steel">∞</div>
                                <div className="text-zinc-500 text-sm">Lives Touched</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { TeamSection } from "@/components/sections/TeamSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { CeoSection } from "@/components/sections/CeoSection";
import { motion } from "framer-motion";


export default function AboutPage() {
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
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            PIONEERS IN <br />
                            <span className="text-industrial-steel">STEEL FABRICATION</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                            For over 25 years, Raza Fancy Steel has been at the forefront of industrial steel fabrication in Pakistan,
                            delivering excellence in every project we undertake.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-industrial-steel font-bold tracking-widest uppercase text-sm">
                                Our Story
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mt-4 mb-8">
                                BUILDING QUALITY <br /> SINCE 2000
                            </h2>
                            <div className="space-y-6 text-zinc-400 leading-relaxed">
                                <p>
                                    Founded by <strong className="text-white">Yousaf Mohan</strong>, Raza Fancy Steel began its journey
                                    with a simple vision: to provide world-class steel fabrication services to industries across Pakistan.
                                </p>
                                <p>
                                    Over the years, we have grown from a small workshop to one of the most trusted names in the
                                    industrial fabrication sector. Our commitment to quality, precision, and customer satisfaction
                                    has helped us build lasting relationships with clients across the nation.
                                </p>
                                <p>
                                    Today, under the leadership of <strong className="text-white">Raza Yousaf</strong> as CEO,
                                    we continue to innovate and expand our capabilities to serve the evolving needs of the industry.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/ss-fancy-work.jpg')" }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-8 rounded-3xl border border-white/10 max-w-xs">
                                <div className="text-5xl font-black text-industrial-steel mb-2">25+</div>
                                <div className="text-white font-semibold">Years of Excellence</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <TimelineSection />



            {/* Founder Section */}
            <FounderSection />

            {/* CEO Section */}
            <CeoSection />
            {/* Team */}
            <TeamSection />
        </>
    );
}

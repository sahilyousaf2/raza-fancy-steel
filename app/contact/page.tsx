"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details: [
            "Plot #219 Sector 7/A",
            "Korangi Industrial Area",
            "Karachi, Pakistan"
        ]
    },
    {
        icon: Phone,
        title: "Phone",
        details: [
            "+92 316 0290519",
            "+92 21 3506XXXX"
        ]
    },
    {
        icon: Mail,
        title: "Email",
        details: [
            "sahilyousaf66@gmail.com",
            "info@razafancysteel.com"
        ]
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: [
            "Monday - Saturday: 9:00 AM - 7:00 PM",
            "Sunday: Closed"
        ]
    }
];

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80')" }}
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
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            GET IN <br />
                            <span className="text-industrial-steel">TOUCH</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-10% 0px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-industrial-steel/50 to-transparent" />
                                <h2 className="text-3xl font-black text-white tracking-tighter mb-2">
                                    SEND US A MESSAGE
                                </h2>
                                <p className="text-zinc-400 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                                <ContactForm />
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-10% 0px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-zinc-900 rounded-3xl p-6 border border-white/10 hover:border-industrial-steel/30 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center shrink-0">
                                            <info.icon className="text-industrial-steel w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                                            <div className="space-y-1">
                                                {info.details.map((detail) => (
                                                    <p key={detail} className="text-zinc-400 text-sm">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* WhatsApp CTA */}
                            <motion.a
                                href="https://wa.me/923160290519?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20fabrication%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="block bg-green-600 hover:bg-green-700 rounded-3xl p-6 border border-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <MessageCircle className="text-white w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Chat on WhatsApp</h3>
                                        <p className="text-white/70 text-sm">
                                            Get quick responses for your inquiries
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-0 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.266684192102!2d67.1262047!3d24.8547397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b005bb2feeb%3A0x6ee7b217b73da8c!2sRaza%20Fancy%20Steel!5e0!3m2!1sen!2s!4v1773568103224!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

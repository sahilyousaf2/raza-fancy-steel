"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923160290519";
const PREFILLED_MESSAGE = "Hello, I would like to inquire about your fabrication services.";

export function WhatsAppButton() {
    const handleClick = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all hover:scale-110 active:scale-95 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Get a Quote
            </span>
        </motion.button>
    );
}

"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name (required)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email (required + format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccess(false);

    // Validate form before submitting
    if (!validateForm()) {
      console.log("[ContactForm] Validation failed:", errors);
      return;
    }

    console.log("[ContactForm] Submitting form data:", formData);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("[ContactForm] Response:", data);

      if (data.status === "success") {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("[ContactForm] Error:", err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-zinc-300"
        >
          Name <span className="text-industrial-steel">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          className={`
            w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 
            text-white placeholder-zinc-500 outline-none transition-all duration-300
            focus:border-industrial-steel focus:ring-2 focus:ring-industrial-steel/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
          `}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-300"
        >
          Email <span className="text-industrial-steel">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          className={`
            w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 
            text-white placeholder-zinc-500 outline-none transition-all duration-300
            focus:border-industrial-steel focus:ring-2 focus:ring-industrial-steel/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
          `}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-zinc-300"
        >
          Phone <span className="text-zinc-500 text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+1 234 567 8900"
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
          className="
            w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 
            text-white placeholder-zinc-500 outline-none transition-all duration-300
            focus:border-industrial-steel focus:ring-2 focus:ring-industrial-steel/20
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-300"
        >
          Message <span className="text-industrial-steel">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          rows={5}
          className={`
            w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 
            text-white placeholder-zinc-500 outline-none transition-all duration-300
            resize-none focus:border-industrial-steel focus:ring-2 focus:ring-industrial-steel/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
          `}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm overflow-hidden"
            role="alert"
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm overflow-hidden"
            role="status"
          >
            ✓ Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`
          w-full py-4 px-6 rounded-xl font-semibold text-[#393536] 
          transition-all duration-300 ease-out
          disabled:opacity-70 disabled:cursor-not-allowed
          ${loading
            ? "bg-zinc-400 cursor-wait"
            : "bg-industrial-steel hover:bg-industrial-steel/90 hover:shadow-lg hover:shadow-industrial-steel/25 hover:scale-[1.02] active:scale-[0.98]"
          }
        `}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

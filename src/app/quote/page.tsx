"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      // Step 1: Captcha verification (placeholder)
      const captchaRes = await fetch("/api/captchaCheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: "PLACEHOLDER_CAPTCHA_TOKEN" }),
      });

      if (!captchaRes.ok) {
        throw new Error("Captcha verification failed. Please try again.");
      }

      // Step 2: Submit quote request
      const submitRes = await fetch("/api/submitQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!submitRes.ok) {
        throw new Error("Failed to submit quote. Please try again.");
      }

      setState("success");
      setForm({ name: "", email: "", phone: "", company: "", details: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative py-16 md:py-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-diesel-yellow/8 blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <p className="text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-4">Free Estimate</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4">
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-diesel-yellow to-[#ffe066]">Quote</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Fill out the form below and our team will get back to you with a detailed estimate.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {state === "success" ? (
            <div className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-3">Quote Request Sent!</h2>
              <p className="text-gray-400 mb-8">
                We&apos;ve received your request and will get back to you shortly.
              </p>
              <button
                onClick={() => setState("idle")}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-white/10 transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-white mb-1">Contact Info</h2>
                <div className="h-px bg-gradient-to-r from-diesel-yellow/50 to-transparent mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Name <span className="text-diesel-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-diesel-yellow/50 focus:ring-1 focus:ring-diesel-yellow/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Email <span className="text-diesel-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-diesel-yellow/50 focus:ring-1 focus:ring-diesel-yellow/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Phone <span className="text-diesel-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-diesel-yellow/50 focus:ring-1 focus:ring-diesel-yellow/20 transition-colors"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-diesel-yellow/50 focus:ring-1 focus:ring-diesel-yellow/20 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-white mb-1">Details</h2>
                <div className="h-px bg-gradient-to-r from-diesel-yellow/50 to-transparent mb-6" />
                <label htmlFor="details" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Describe your project, engine type, parts needed, service required, or any other details that will help us provide an accurate quote..."
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-diesel-yellow/50 focus:ring-1 focus:ring-diesel-yellow/20 transition-colors resize-y min-h-[120px]"
                />
              </div>

              {/* Error Message */}
              {state === "error" && (
                <div className="flex items-center gap-3 px-4 py-3 bg-diesel-red/10 border border-diesel-red/20 rounded text-diesel-red text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* TODO: Add captcha widget here */}

              {/* Submit */}
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full px-8 py-4 bg-diesel-yellow text-black font-bold uppercase tracking-wide text-sm rounded hover:bg-[#ffe066] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Quote Request
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}

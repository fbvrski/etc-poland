"use client";

import { useState } from "react";

export default function ContactClient() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
        setMessage("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setFormState("error");
      setMessage("Failed to send message. Please try again.");
    }
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-display font-extrabold mb-4">Contact</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch to discuss your next project
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Address</h2>
                <p className="text-gray-700">
                  ETC Polska Sp. z o.o.<br />
                  Warsaw, Poland
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Reach us</h2>
                <p className="text-gray-700">
                  <a href="tel:+48221234567" className="hover:text-[#0F2D8A]">+48 (0)22 XXX XXXX</a><br />
                  <a href="mailto:info@etc-transport.com" className="hover:text-[#0F2D8A]">info@etc-transport.com</a>
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none"
                  >
                    <option value="">— Select topic —</option>
                    <option>Transport Consultancy Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2D8A] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 accent-[#0F2D8A]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the processing of my personal data for the purpose of this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {message && (
                  <div
                    className={`p-4 rounded-lg text-sm font-medium ${
                      formState === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

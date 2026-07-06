"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? Get in touch with me
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500/20 text-orange-500">
                      ✉️
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400">info@siviwedeemc.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500/20 text-orange-500">
                      📱
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500/20 text-orange-500">
                      📍
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">Your City, Country</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    🎵
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    ▶️
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-orange-500/5 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-orange-500/5 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-orange-500/5 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-orange-500/5 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

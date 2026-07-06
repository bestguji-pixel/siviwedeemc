"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark via-dark to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-semibold">
          🎵 Welcome to My Creative Universe
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          I'm <span className="gradient-text">SiwiDeeMC</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Creative MC, Music Producer, and Brand Builder. Crafting beats, stories, and experiences that resonate with audiences worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/portfolio" className="btn-primary w-full sm:w-auto">
            View My Work
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div className="hover-glow">
            <div className="text-4xl font-bold gradient-text">100+</div>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="hover-glow">
            <div className="text-4xl font-bold gradient-text">50K+</div>
            <p className="text-gray-400 mt-2">Community Followers</p>
          </div>
          <div className="hover-glow">
            <div className="text-4xl font-bold gradient-text">10+</div>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

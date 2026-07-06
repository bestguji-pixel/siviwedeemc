import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Work Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of my best work and creative ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="hover-glow bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project One</h3>
              <p className="text-gray-400 text-sm mb-4">
                Description of your first project goes here
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-400 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="hover-glow bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project Two</h3>
              <p className="text-gray-400 text-sm mb-4">
                Description of your second project goes here
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-400 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="hover-glow bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project Three</h3>
              <p className="text-gray-400 text-sm mb-4">
                Description of your third project goes here
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-400 font-semibold">
                Learn More →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-y border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together. Get in touch today!
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}

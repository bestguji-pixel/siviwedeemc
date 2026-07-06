export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: "Music",
      description: "Amazing music production project",
      image: "🎵",
    },
    {
      id: 2,
      title: "Project 2",
      category: "Branding",
      description: "Creative branding campaign",
      image: "🎨",
    },
    {
      id: 3,
      title: "Project 3",
      category: "Production",
      description: "Professional production work",
      image: "🎬",
    },
    {
      id: 4,
      title: "Project 4",
      category: "Music",
      description: "Chart-topping track production",
      image: "🎵",
    },
    {
      id: 5,
      title: "Project 5",
      category: "Branding",
      description: "Brand identity design",
      image: "🎨",
    },
    {
      id: 6,
      title: "Project 6",
      category: "Production",
      description: "Video production expertise",
      image: "🎬",
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my best work across music production, branding, and creative projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="hover-glow bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20 cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 font-semibold text-sm"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-12 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-gray-400 mb-4">Filter by Category:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Music", "Branding", "Production"].map((tag) => (
              <button
                key={tag}
                className="px-6 py-2 border border-orange-500/30 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

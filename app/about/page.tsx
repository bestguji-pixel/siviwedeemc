export default function About() {
  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-400">Discover my story and journey</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hover-glow">
              <div className="w-full h-80 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">My Story</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Welcome! I'm SiwiDeeMC, a passionate creative MC, music producer, and brand builder with over a decade of experience in the entertainment industry.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                My journey started with a simple love for music and storytelling. Today, I've grown to work with major brands, artists, and media companies to create impactful content that resonates with audiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in music production, MC performances, brand development, and creative storytelling. My mission is to inspire and connect with people through authentic, high-quality creative work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-orange-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4">Music Production</h3>
              <p className="text-gray-400 mb-4">
                Professional beat production, mixing, and mastering
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Production</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-orange-500/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
              <p className="text-gray-400 mb-4">
                Creative branding and strategic brand positioning
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Branding</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-orange-500/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-400 mb-4">
                Creative content production and storytelling
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Content</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-orange-500/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                <div className="w-1 h-24 bg-orange-500/30"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">Senior MC & Producer</h3>
                <p className="text-orange-500 text-sm">2020 - Present</p>
                <p className="text-gray-400 mt-2">
                  Leading creative projects and collaborating with top artists
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                <div className="w-1 h-24 bg-orange-500/30"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">Music Producer</h3>
                <p className="text-orange-500 text-sm">2015 - 2020</p>
                <p className="text-gray-400 mt-2">
                  Produced beats for indie and mainstream artists
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Emerging Artist</h3>
                <p className="text-orange-500 text-sm">2010 - 2015</p>
                <p className="text-gray-400 mt-2">
                  Started my journey in music and creative expression
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

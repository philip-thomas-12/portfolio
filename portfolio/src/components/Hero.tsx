export default function Hero() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <div className="flex flex-col gap-6">
        <span className="text-sm font-mono text-accent-blue tracking-wider">01. ABOUT</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white">
          Philip Thomas.
        </h1>
        <p className="text-xl md:text-3xl font-sans text-gray-300 max-w-3xl leading-snug">
          Building backend systems, practical software, and intelligent applications.
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mt-4">
          I am a B.Tech Information Technology student at CUSAT focused on backend development, APIs, databases, and AI-powered applications. I enjoy building practical systems, experimenting with new technologies, and working on projects that solve real problems.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#projects" className="px-6 py-3 bg-white text-black font-sans font-medium rounded-sm hover:bg-gray-200 transition-colors">
            VIEW PROJECTS &rarr;
          </a>
          <a href="https://github.com/philip-thomas-12" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#262626] text-white font-sans font-medium rounded-sm hover:bg-[#1a1a1a] transition-colors">
            GITHUB &rarr;
          </a>
          <a href="https://www.linkedin.com/in/philip-thomas-a55779329/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#262626] text-white font-sans font-medium rounded-sm hover:bg-[#1a1a1a] transition-colors">
            LINKEDIN &rarr;
          </a>
          <a href="#" className="px-6 py-3 border border-[#262626] text-white font-sans font-medium rounded-sm hover:bg-[#1a1a1a] transition-colors">
            DOWNLOAD RESUME &rarr;
          </a>
        </div>

        <div className="mt-16 p-6 border border-[#262626] bg-card-bg rounded-sm max-w-md">
          <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider mb-2">Education</h3>
          <p className="font-serif text-xl text-white">B.Tech in Information Technology</p>
          <p className="text-gray-400 mt-1">School of Engineering, CUSAT</p>
          <div className="flex items-center gap-4 mt-4 font-mono text-sm">
            <span className="text-gray-500">2023 &mdash; Present</span>
            <span className="text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-sm">CGPA: 8.4 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "Real-Time AI Voice Chatbot",
      description:
        "Built a real-time speech-to-speech AI chatbot using React and FastAPI with LLM-powered responses and WebSocket communication.",
      tech: ["Python", "FastAPI", "React", "WebSockets", "Modal"],
    },
    {
      title: "Face-Match Web Application",
      description:
        "Developed a face comparison web app that analyzes two images and returns a confidence-based match score using computer vision.",
      tech: ["Python", "Flask", "React", "OpenCV", "dlib"],
    },
    {
      title: "Bus Tracking System",
      description:
        "Designed a real-time bus tracking concept with Uber-style UI and simulated GPS movement based on routes and schedules.",
      tech: ["React", "Python", "Maps API", "Flask"],
    },
  ];

  const skills = [
    "Python",
    "C++",
    "React",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Data Structures",
    "Data Optimization",
    "Algorithms",
    "Web Development",
    "Machine Learning",
    "OpenCV",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 text-lg mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Philip Thomas
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-300 mb-6">
              B.Tech IT Student at CUSAT
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              Passionate about AI, backend engineering, and scalable web
              applications. I enjoy building intelligent systems, solving
              real-world problems, and exploring modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/philip-thomas-12"
                target="_blank"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-2xl font-semibold transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/philip-thomas-a55779329/"
                target="_blank"
                className="px-6 py-3 border border-zinc-600 hover:border-green-400 rounded-2xl transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-7xl font-bold">
                PT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-20 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am an Information Technology undergraduate at CUSAT with strong
            interests in artificial intelligence, backend development, and data
            science. I enjoy working on innovative projects that combine modern
            web technologies with intelligent systems. My goal is to build
            scalable applications and contribute to impactful real-world
            solutions.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-20 py-20 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-800 text-sm rounded-full text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-green-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-20 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience & Activities</h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Software Team Member — Vyomastra
              </h3>
              <p className="text-green-400 mb-4">June 2025 - Present</p>
              <p className="text-zinc-400 leading-relaxed">
                Developed and implemented machine learning algorithms for sensor
                data processing and onboard predictive modeling.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Learning Coordinator — TinkerHub CUSAT
              </h3>
              <p className="text-green-400 mb-4">2025 - Present</p>
              <p className="text-zinc-400 leading-relaxed">
                Organized peer-learning sessions and helped students improve
                their technical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-zinc-400 text-lg mb-10">
            Open to internships, collaborations, and exciting opportunities in
            AI, software engineering, and backend development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:thomasphil6889@gmail.com"
              className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-2xl font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/philip-thomas-12"
              target="_blank"
              className="px-6 py-3 border border-zinc-600 hover:border-green-400 rounded-2xl transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

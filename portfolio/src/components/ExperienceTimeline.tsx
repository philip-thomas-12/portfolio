import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">02. EXPERIENCE</span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-white mt-4">Work & Leadership.</h2>
        </div>

        <div className="relative border-l border-[#262626] ml-3 md:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-card-bg border-2 border-accent-blue rounded-full -left-[6.5px] top-1.5" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-gray-400">{exp.organization}</p>
                </div>
                <span className="font-mono text-sm text-gray-500 bg-[#1a1a1a] px-3 py-1 rounded-sm self-start md:self-auto">
                  {exp.date}
                </span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-400 leading-relaxed flex items-start gap-3">
                    <span className="text-accent-blue text-lg mt-0.5">&rsaquo;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="font-mono text-xs text-gray-300 border border-[#262626] px-2 py-1 rounded-sm bg-[#0a0a0a]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

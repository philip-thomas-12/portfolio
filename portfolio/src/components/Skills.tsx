import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">04. SKILLS</span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-white mt-4">Technical Arsenal.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div key={index} className="border border-[#262626] bg-card-bg p-6 rounded-sm hover:border-accent-blue/50 transition-colors group">
              <h3 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-4 group-hover:text-white transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="font-mono text-xs text-white bg-[#1a1a1a] border border-[#333] px-3 py-1.5 rounded-sm">
                    {skill}
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

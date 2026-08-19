import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">03. PROJECTS</span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-white mt-4">Selected Work.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={index} project={project} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

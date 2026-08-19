import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function GithubArchive() {
  const archive = projects.filter(p => !p.featured);

  if (archive.length === 0) return null;

  return (
    <section className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold tracking-tight text-white">GitHub Archive.</h2>
          <p className="text-gray-400 mt-2 font-sans">Other notable repositories and experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archive.map((project, index) => (
            <ProjectCard key={index} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className={`flex flex-col border border-[#262626] bg-card-bg rounded-sm hover:border-white/30 transition-colors ${featured ? 'p-8' : 'p-6'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="font-mono text-xs text-accent-blue uppercase tracking-wider block mb-2">
            {project.category}
          </span>
          <h3 className={`font-serif font-bold text-white ${featured ? 'text-2xl' : 'text-xl'}`}>
            {project.name}
          </h3>
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Live Demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[#1a1a1a]">
        {project.techStack.map((tech, index) => (
          <span key={index} className="font-mono text-xs text-gray-400">
            {tech}{index < project.techStack.length - 1 ? ' •' : ''}
          </span>
        ))}
      </div>
    </div>
  );
}

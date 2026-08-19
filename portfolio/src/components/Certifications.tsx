import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">05. CERTIFICATIONS</span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-white mt-4">Continuous Learning.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col p-6 border border-[#262626] bg-card-bg rounded-sm hover:border-white/30 transition-colors">
              <h3 className="font-sans font-medium text-white mb-2">{cert.name}</h3>
              <p className="font-mono text-sm text-gray-400 mb-6">{cert.platform}</p>
              
              <div className="mt-auto flex justify-between items-center">
                <span className="font-mono text-xs text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded-sm">
                  {cert.year}
                </span>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

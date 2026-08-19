import { currentlyData } from "@/data/currently";

export default function Currently() {
  return (
    <section id="currently" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">06. CURRENTLY</span>
          <h2 className="text-4xl font-serif font-bold tracking-tight text-white mt-4">What I&apos;m Up To.</h2>
          <p className="font-mono text-xs text-gray-500 mt-4">Last updated: {currentlyData.lastUpdated}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-[#262626]">
              Learning
            </h3>
            <ul className="space-y-4">
              {currentlyData.learning.map((item, index) => (
                <li key={index} className="text-gray-300 font-sans flex items-center gap-3">
                  <span className="text-accent-blue">&rsaquo;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-[#262626]">
              Building
            </h3>
            <ul className="space-y-4">
              {currentlyData.building.map((item, index) => (
                <li key={index} className="text-gray-300 font-sans flex items-center gap-3">
                  <span className="text-accent-blue">&rsaquo;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-[#262626]">
              Looking For
            </h3>
            <ul className="space-y-4">
              {currentlyData.lookingFor.map((item, index) => (
                <li key={index} className="text-accent-blue font-sans flex items-center gap-3 font-medium">
                  <span className="text-white">&rsaquo;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-gray-500">
        <div>
          <p className="text-gray-300 font-sans font-medium mb-1">Philip Thomas</p>
          <p>B.Tech IT • CUSAT</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/philip-thomas-12" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/philip-thomas-a55779329/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:contact@example.com" className="hover:text-white transition-colors">Email</a>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Philip Thomas</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          PT.
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors">01. ABOUT</Link>
          <Link href="#experience" className="hover:text-white transition-colors">02. EXPERIENCE</Link>
          <Link href="#projects" className="hover:text-white transition-colors">03. PROJECTS</Link>
          <Link href="#skills" className="hover:text-white transition-colors">04. SKILLS</Link>
          <Link href="#contact" className="hover:text-white transition-colors">07. CONTACT</Link>
        </nav>
        {/* Mobile menu button placeholder */}
        <button className="md:hidden text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
}

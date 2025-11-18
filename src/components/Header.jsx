import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${
      scrolled ? "backdrop-blur-md bg-slate-900/60 border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold tracking-tight text-white text-lg">REDRUM</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-white/90">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}

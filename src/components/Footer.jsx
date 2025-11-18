export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/80 text-sm">© 2025 REDRUM Studio. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">Twitter/X</a>
        </div>
      </div>
    </footer>
  );
}

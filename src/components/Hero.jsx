import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-16 w-[40rem] h-[40rem] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
            >
              Design that feels cinematic.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl"
            >
              We craft immersive digital experiences, blending motion, story, and brand into pixels that resonate.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#work" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">See our work</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition">Get in touch</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

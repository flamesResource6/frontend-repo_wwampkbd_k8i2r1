import { motion } from "framer-motion";
import { Sparkles, Film, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand & Story",
    desc: "Positioning, tone, narratives that connect and convert.",
  },
  {
    icon: Film,
    title: "Motion & Film",
    desc: "Cinematic product visuals, launch films, and edit craft.",
  },
  {
    icon: LayoutDashboard,
    title: "Web & Product",
    desc: "Sites and interfaces with precision, speed, and taste.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5"
            >
              <s.icon className="text-white/90" />
              <h3 className="mt-4 text-white text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

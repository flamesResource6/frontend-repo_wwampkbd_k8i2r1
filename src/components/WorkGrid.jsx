import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cinder: Brand film",
    image:
      "https://images.unsplash.com/photo-1707343843603-7da21b7b03b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Astra: Product demo",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Helix: Launch visuals",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Noir: Editorial site",
    image:
      "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
          <a href="#" className="text-sm text-slate-300 hover:text-white">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="text-white font-medium drop-shadow">
                  {item.title}
                </div>
                <div className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition">Case study →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

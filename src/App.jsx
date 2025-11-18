import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkGrid from "./components/WorkGrid";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />

      <main className="pt-16">
        <Hero />
        <WorkGrid />
        <Services />

        <section id="about" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">About</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We are a small studio obsessed with craft. We collaborate with brands and startups to create expressive visuals and interfaces that feel inevitable. Precision, pacing, and taste — always.
            </p>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Get in touch</h2>
            <form className="grid sm:grid-cols-2 gap-4">
              <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400" placeholder="Name" />
              <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
              <textarea className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 min-h-[120px]" placeholder="Tell us about your project" />
              <div>
                <button className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
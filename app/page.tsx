export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 text-sm tracking-widest">
            NEXT GENERATION
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            NEXUS<br />AWAKENS
          </h1>
          
          <p className="text-2xl text-white/70 mb-10 max-w-md mx-auto">
            Donde la tecnología se encuentra con la belleza
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#features" className="glass px-10 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all">
              Explorar
            </a>
            <a href="#" className="bg-white text-black px-10 py-4 rounded-2xl font-medium hover:bg-white/90 transition-all">
              Comenzar Ahora
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          ↓
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">El Futuro es Ahora</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Velocidad", desc: "Carga instantánea con Next.js 15" },
              { title: "Diseño", desc: "Glassmorphism y animaciones fluidas" },
              { title: "Escalable", desc: "Preparado para crecer sin límites" }
            ].map((feature, i) => (
              <div key={i} className="glass p-10 rounded-3xl group hover:scale-105 transition-transform">
                <div className="text-6xl mb-6 opacity-70 group-hover:opacity-100 transition-all">0{i+1}</div>
                <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

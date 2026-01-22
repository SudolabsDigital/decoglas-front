"use client"

import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function ArchitecturalFooter() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 overflow-hidden relative">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
           <div className="max-w-2xl">
              <span className="font-mono text-accent text-xs uppercase tracking-widest mb-4 block">¿Listo para construir?</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                 Transformemos tu visión en <span className="text-gray-500">estructura</span>.
              </h2>
              
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                 <button className="group relative flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-xl font-bold transition-all hover:bg-accent hover:text-white w-full sm:w-auto justify-center">
                    <span>Iniciar Proyecto</span>
                    <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                 </button>
              </MagneticButton>
           </div>

           <div className="flex flex-col gap-2 text-right hidden md:flex">
              <span className="text-gray-500 font-mono text-xs uppercase">Hablemos directamente</span>
              <a href="mailto:proyectos@decoglass.pe" className="text-2xl hover:text-accent transition-colors border-b border-transparent hover:border-accent inline-block pb-1">
                 proyectos@decoglass.pe
              </a>
           </div>
        </div>

        {/* MIDDLE SECTION: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-t border-white/10">
           
           {/* Column 1: Navigation */}
           <div className="space-y-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">Explorar</h4>
              <ul className="space-y-4">
                 {['Inicio', 'Nosotros', 'Proyectos', 'Servicios', 'Noticias'].map((item) => (
                    <li key={item}>
                       <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block">
                          {item}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 2: Legal */}
           <div className="space-y-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4">
                 {['Términos', 'Privacidad', 'Garantía', 'Cookies'].map((item) => (
                    <li key={item}>
                       <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block">
                          {item}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3: Socials */}
           <div className="space-y-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">Social</h4>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Instagram className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Twitter className="w-5 h-5" />
                 </a>
              </div>
           </div>

           {/* Column 4: Location */}
           <div className="space-y-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">Ubicación</h4>
              <p className="text-gray-400 leading-relaxed">
                 Av. Javier Prado Oeste 1234<br/>
                 San Isidro, Lima 27<br/>
                 Perú
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 Oficinas Abiertas
              </div>
           </div>
        </div>

        {/* BOTTOM SECTION: Massive Brand */}
        <div className="mt-12 pt-12 border-t border-white/10">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-4">
              <span className="text-xs text-gray-600 font-mono uppercase">© 2026 Decoglass S.A.C.</span>
           </div>
           
           {/* Giant Text Masked */}
           <h1 className="text-[13vw] leading-[0.75] font-bold tracking-tighter text-center md:text-left text-transparent bg-clip-text bg-gradient-to-b from-white to-[#050505] select-none opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">
              DECOGLASS
           </h1>
        </div>

      </div>
    </footer>
  )
}

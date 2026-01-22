"use client"

import { ShieldCheck, Anchor, Ruler, FileCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Cristal Templado",
    subtitle: "Certificación de Seguridad",
    desc: "Procesado bajo norma internacional ANSI Z97.1. Resistencia al impacto térmico y mecánico superior al estándar de mercado.",
    specs: ["Espesor: 8mm - 12mm", "Canto: Pulido Brillante", "Norma: ASTM C1048"]
  },
  {
    id: "02",
    icon: Anchor,
    title: "Acero Inoxidable",
    subtitle: "Grado Arquitectónico 304",
    desc: "Herrajes diseñados para resistir ambientes salinos y corrosión. Acabados satinados de grado quirúrgico que perduran.",
    specs: ["Aleación: AISI 304", "Acabado: Satin / Mate", "Vida útil: +20 Años"]
  },
  {
    id: "03",
    icon: Ruler,
    title: "Precisión Láser",
    subtitle: "Instalación Digital",
    desc: "Medición y nivelación con tecnología láser de 3 planos. Garantizamos alineación perfecta y funcionamiento suave.",
    specs: ["Tolerancia: < 1mm", "Nivelación: 3-Axis", "Sellado: Silicona UV"]
  },
  {
    id: "04",
    icon: FileCheck,
    title: "Garantía Total",
    subtitle: "Cobertura 12 Meses",
    desc: "Respaldo integral por escrito. Cubrimos defectos de fabricación, instalación y funcionamiento del sistema.",
    specs: ["Cobertura: 1 Año", "Visitas: 0 Costo", "Soporte: 24/7"]
  }
]

export function GuaranteeGrid() {
  return (
    <div className="relative w-full lg:min-h-screen h-auto flex flex-col lg:flex-row bg-[#050505] text-white border-t border-white/10">
      
      {features.map((item) => (
        <div 
          key={item.id}
          className={cn(
            "group relative w-full lg:flex-1 border-b lg:border-b-0 lg:border-r border-white/10 p-10 lg:p-12 flex flex-col justify-end transition-all duration-700 ease-out min-h-[45vh] lg:min-h-[300px] overflow-hidden",
            "bg-gradient-to-b from-transparent to-white/[0.02]", // Subtle gradient for depth
            "hover:bg-accent/[0.05] lg:hover:flex-[1.5]" 
          )}
        >
          {/* Background Big Number - More visible on mobile for texture */}
          <span className="absolute top-0 right-4 text-[120px] lg:text-[180px] font-bold leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none font-mono tracking-tighter z-0">
            {item.id}
          </span>

          {/* Icon - Highlighted */}
          <div className="absolute top-10 left-10 lg:left-12 text-accent/80 group-hover:text-accent transition-colors duration-300 z-10">
             <item.icon strokeWidth={1} className="w-10 h-10 lg:w-12 lg:h-12" />
          </div>

          {/* Content Container with Fixed Width to prevent reflow jitter */}
          <div className="relative z-10 mt-auto min-w-[280px] lg:min-w-[320px]">
            
            {/* Subtitle (Tech) - Always visible on mobile, animated on desktop */}
            <div className="overflow-hidden mb-3">
               <span className="block text-xs font-mono uppercase tracking-[0.2em] text-accent/80 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {"// "}{item.subtitle}
               </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight lg:group-hover:translate-x-2 lg:group-hover:scale-105 lg:group-hover:origin-left transition-all duration-700 ease-out whitespace-nowrap">
              {item.title}
            </h3>

            {/* Specs Grid - Clean Fade (No Blur) */}
            <div className="grid grid-cols-1 gap-2 mb-8 border-l-2 border-accent/30 pl-4 py-1 bg-white/[0.02] rounded-r-lg lg:bg-transparent lg:rounded-none lg:border-l lg:border-accent/20 transition-all duration-700 ease-out lg:opacity-50 lg:group-hover:opacity-100">
               {item.specs.map((spec, i) => (
                  <p key={i} className="text-xs font-mono text-zinc-400">
                     {spec}
                  </p>
               ))}
            </div>

            {/* Description - Stable Slide */}
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm border-t border-white/10 pt-6 transition-all duration-700 delay-100 ease-out lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:text-white">
              {item.desc}
            </p>

            {/* Hover Action Arrow (Desktop Only) */}
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider hidden lg:flex">
               <span>Detalles Técnicos</span>
               <ArrowRight className="w-4 h-4" />
            </div>

          </div>
          
          {/* Active Border Gradient (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      ))}

    </div>
  )
}

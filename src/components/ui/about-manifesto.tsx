"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowDown } from "lucide-react"

export function AboutManifesto() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="relative bg-background text-foreground py-24 md:py-48 z-10 rounded-t-[3rem] -mt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
       <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* Sticky Left: The Numbers */}
          <div className="md:w-1/3 relative">
             <div className="sticky top-32">
                 <div className="inline-flex items-center gap-2 mb-8 border border-black/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest">Estado: Operativo</span>
                 </div>
                 
                 <h2 className="text-7xl md:text-[10rem] leading-[0.8] font-bold tracking-tighter mb-4">
                    15<span className="text-4xl align-top text-gray-400">Yrs</span>
                 </h2>
                 <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-xs">
                    Redefiniendo el estándar de la industria del vidrio en Perú.
                 </p>
                 
                 <div className="mt-12 w-12 h-12 border border-black/10 rounded-full flex items-center justify-center animate-bounce">
                    <ArrowDown className="w-4 h-4" />
                 </div>
             </div>
          </div>

          {/* Scrollable Right: The Story */}
          <div className="md:w-2/3 space-y-48 pt-12 border-l border-gray-100 pl-8 md:pl-16">
             <Article 
                year="2010" 
                title="El Origen" 
                text="Decoglass nace con una premisa radical: el vidrio no es solo un material de construcción, es un elemento de diseño. Iniciamos operaciones enfocados exclusivamente en residencias de lujo, donde el detalle lo es todo."
             />
             <Article 
                year="2015" 
                title="La Expansión" 
                text="La demanda creció. Escalamos nuestras operaciones para atender proyectos corporativos (B2B), implementando maquinaria de corte CNC y hornos de templado propios para garantizar tiempos récord."
             />
             <Article 
                year="2026" 
                title="El Futuro" 
                text="Hoy, lideramos la integración de tecnología y arquitectura. Fachadas inteligentes que regulan la temperatura, vidrios electrocrómicos y sistemas acústicos invisibles. Esto es solo el comienzo."
             />
          </div>

       </div>
    </section>
  )
}

function Article({ year, title, text }: { year: string, title: string, text: string }) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-20%" }}
         transition={{ duration: 0.8 }}
         className="group"
      >
         <span className="font-mono text-xs font-bold text-accent mb-6 block tracking-widest">{year} — HITO</span>
         <h3 className="text-5xl md:text-7xl font-bold mb-8 group-hover:text-primary transition-colors duration-300">
            {title}
         </h3>
         <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
            {text}
         </p>
      </motion.div>
   )
}
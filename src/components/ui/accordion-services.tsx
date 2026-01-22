"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "01",
    title: "Mamparas",
    subtitle: "Conexión Total",
    desc: "Sistemas corredizos y plegables que eliminan los límites entre interior y exterior.",
    img: "/assets/services/mampara-2.jpg"
  },
  {
    id: "02",
    title: "Fachadas",
    subtitle: "Piel de Vidrio",
    desc: "Muros cortina y sistemas spider para edificios corporativos de alto impacto.",
    img: "/assets/services/fachada-integral.png"
  },
  {
    id: "03",
    title: "Acústica",
    subtitle: "Serie Nova",
    desc: "Ventanas herméticas diseñadas para el silencio absoluto y confort térmico.",
    img: "/assets/services/ventana-sistema-nova.jpg"
  },
  {
    id: "04",
    title: "Techos",
    subtitle: "Policarbonato",
    desc: "Coberturas ligeras que filtran la luz UV sin sacrificar luminosidad.",
    img: "/assets/services/techo-policarbonato.png"
  }
]

export function AccordionServices() {
  const [activeId, setActiveId] = useState<string>("01")

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">Soluciones</h2>
         <p className="text-xl text-muted-foreground mt-2">Ingeniería aplicada al diseño.</p>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
        {services.map((service) => (
          <motion.div
            key={service.id}
            layout
            onClick={() => setActiveId(service.id)}
            className={cn(
              "relative rounded-3xl overflow-hidden cursor-pointer isolate transition-all duration-500",
              activeId === service.id 
                ? "h-[500px] md:h-full md:flex-[3]" 
                : "h-[100px] md:h-full md:flex-[1] bg-gray-100"
            )}
          >
            {/* Image Layer - Always visible but styled */}
            <motion.div 
               className="absolute inset-0 z-0"
               animate={{ 
                  filter: activeId === service.id ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(50%)" 
               }}
               transition={{ duration: 0.5 }}
            >
               <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
               />
               <div className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeId === service.id ? "bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" : "bg-black/40"
               )} />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 h-full p-6 md:p-8 flex flex-col md:justify-between justify-end">
               
               {/* Header */}
               <div className={cn(
                 "flex justify-between items-start absolute top-6 left-6 right-6 md:static",
                 activeId !== service.id ? "items-center" : ""
               )}>
                  <span className="font-mono text-xl font-bold text-white z-20 mix-blend-difference">
                     {service.id}
                  </span>

                  <div className={cn(
                     "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md z-20",
                     activeId === service.id ? "bg-white text-black" : "bg-white/10 text-white border border-white/20"
                  )}>
                     {activeId === service.id ? <ArrowUpRight className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
               </div>

               {/* Title & Desc */}
               <div className="space-y-4 pt-12 md:pt-0 relative h-full flex flex-col justify-end">
                  <motion.h3 
                     layout="position"
                     className={cn(
                        "font-bold tracking-tight text-white transition-all duration-500 origin-left whitespace-nowrap z-10",
                        activeId === service.id 
                           ? "text-3xl md:text-5xl translate-y-0 rotate-0" 
                           : "text-xl md:text-3xl md:rotate-[-90deg] md:origin-bottom-left md:absolute md:bottom-8 md:left-8"
                     )}
                  >
                     {service.title}
                  </motion.h3>
                  
                  <motion.div 
                     initial={false}
                     animate={{ 
                        opacity: activeId === service.id ? 1 : 0,
                        height: activeId === service.id ? "auto" : 0
                     }}
                     className="overflow-hidden"
                  >
                     <p className="text-lg text-gray-200 font-medium mb-2">{service.subtitle}</p>
                     <p className="text-sm text-gray-300 max-w-md leading-relaxed">
                        {service.desc}
                     </p>
                  </motion.div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

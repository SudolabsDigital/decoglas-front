"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  { id: "01", title: "Mamparas", desc: "Conexión Interior-Exterior", img: "/assets/services/mampara-2.jpg" },
  { id: "02", title: "Fachadas", desc: "Piel de Vidrio Integral", img: "/assets/services/fachada-integral.png" },
  { id: "03", title: "Acústica", desc: "Ventanas Sistema Nova", img: "/assets/services/ventana-sistema-nova.jpg" },
  { id: "04", title: "Coberturas", desc: "Techos Policarbonato", img: "/assets/services/techo-policarbonato.png" },
  { id: "05", title: "Detalles", desc: "Barandas & Espejos", img: "/assets/services/mampara-3.jpg" }
]

export function ServiceIndex() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Track mouse for floating image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative py-32 bg-background z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        
        <div className="flex items-end justify-between mb-24 border-b border-black/10 pb-6">
           <div>
              <h2 className="text-4xl font-light text-muted-foreground">Índice de</h2>
              <p className="text-5xl md:text-6xl font-bold text-primary">Soluciones Técnicas</p>
           </div>
           <div className="hidden md:block text-right">
              <p className="font-mono text-xs uppercase text-muted-foreground">Catálogo 2026 / Rev. 02</p>
           </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative border-t border-gray-200 py-12 cursor-pointer transition-all duration-300 hover:px-4"
            >
              <div className="flex items-center justify-between relative z-10 mix-blend-difference">
                 <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="font-mono text-sm text-gray-400 group-hover:text-accent transition-colors">/{service.id}</span>
                    <h3 className="text-4xl md:text-8xl font-bold tracking-tighter text-gray-300 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                 </div>
                 <div className="hidden md:flex items-center gap-4">
                    <span className="text-sm font-light text-gray-400 group-hover:text-white">{service.desc}</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                       <ArrowUpRight className="w-5 h-5" />
                    </div>
                 </div>
              </div>
              
              {/* Background fill on hover */}
              <div className="absolute inset-0 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Reveal Image (Fixed to viewport) */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
               opacity: 1, 
               scale: 1, 
               x: mousePos.x - 200,
               y: mousePos.y - 250
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="fixed top-0 left-0 z-30 pointer-events-none w-[400px] h-[500px] hidden lg:block overflow-hidden rounded-lg shadow-2xl"
          >
             <Image 
                src={services[activeService].img} 
                alt="Preview" 
                fill 
                className="object-cover"
             />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
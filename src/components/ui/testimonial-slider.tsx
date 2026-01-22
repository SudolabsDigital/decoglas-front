"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "La precisión en la instalación de la fachada integral fue quirúrgica.",
    author: "Arq. Roberto M.",
    role: "Director Grupo A",
    location: "San Isidro",
    image: "/assets/services/fachada-integral.png"
  },
  {
    id: 2,
    quote: "El sistema Nova logró el silencio absoluto que necesitábamos.",
    author: "Dra. Elena V.",
    role: "Gerente Clínica Vital",
    location: "Miraflores",
    image: "/assets/services/ventana-sistema-nova.jpg"
  },
  {
    id: 3,
    quote: "Trabajo de ingeniería y diseño espectacular en la casa de playa.",
    author: "Carlos Ruiz",
    role: "Propietario",
    location: "Asia",
    image: "/assets/services/mampara-2.jpg"
  }
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    let nextIndex = current + newDirection
    if (nextIndex < 0) nextIndex = testimonials.length - 1
    if (nextIndex >= testimonials.length) nextIndex = 0
    setCurrent(nextIndex)
  }

  return (
    <section className="bg-foreground text-background py-24 md:py-32 overflow-hidden relative">
       
       <div className="absolute top-0 left-12 h-full w-px bg-white/10 hidden md:block" />
       
       <div className="container mx-auto px-6 md:pl-24 relative z-10">
          
          <div className="mb-12 flex items-center gap-4 text-accent">
             <Quote className="w-8 h-8 fill-current" />
             <span className="font-mono text-xs uppercase tracking-widest">Experiencias</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             
             {/* LEFT: Text Content */}
             <div className="relative h-[350px] md:h-[300px] order-2 lg:order-1">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                   <motion.div
                      key={current}
                      custom={direction}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                   >
                      <h3 className="text-2xl md:text-5xl font-light leading-tight mb-8 font-serif italic text-gray-200">
                         &quot;{testimonials[current].quote}&quot;
                      </h3>
                      
                      <div className="flex flex-col gap-1 border-l-2 border-accent pl-6">
                         <span className="text-lg md:text-xl font-bold text-white">{testimonials[current].author}</span>
                         <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{testimonials[current].role}</span>
                         <span className="text-xs text-gray-600 font-mono mt-1">{testimonials[current].location}</span>
                      </div>
                   </motion.div>
                </AnimatePresence>
             </div>

             {/* RIGHT: Image Visualization */}
             <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-gray-800 order-1 lg:order-2">
                <AnimatePresence initial={false} mode="wait">
                   <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                   >
                      <Image 
                         src={testimonials[current].image} 
                         alt="Reference" 
                         fill 
                         className="object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                   </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                   <div className="text-4xl md:text-6xl font-bold text-white/10 font-mono">
                      0{testimonials[current].id}
                   </div>
                   <div className="flex gap-4">
                      <button 
                         onClick={() => paginate(-1)}
                         className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95 text-white"
                      >
                         <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button 
                         onClick={() => paginate(1)}
                         className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all active:scale-95"
                      >
                         <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"

const testimonials = [
  { text: "La calidad es impecable. Superaron las expectativas.", author: "Arq. Ana García" },
  { text: "Precisión milimétrica en la instalación de fachadas.", author: "Ing. Carlos Robles" },
  { text: "Transformaron nuestra oficina por completo.", author: "Tech Solutions CEO" },
  { text: "El mejor servicio post-venta del mercado.", author: "Residencial Las Begonias" },
]

export function TestimonialMarquee() {
  return (
    <section className="py-24 overflow-hidden bg-background border-y border-gray-200">
       <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             className="flex gap-24 pr-24"
          >
             {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                   <span className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                      “{t.text}”
                   </span>
                   <span className="text-sm font-mono uppercase tracking-widest text-accent border border-accent px-2 py-1 rounded-full">
                      {t.author}
                   </span>
                </div>
             ))}
          </motion.div>
       </div>
    </section>
  )
}

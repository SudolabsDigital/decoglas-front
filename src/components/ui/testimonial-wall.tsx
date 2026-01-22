"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface Review {
  text: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  { text: "La atención al detalle en nuestra residencia fue excepcional. Las mamparas corren como si flotaran.", author: "Arq. Sofia M.", role: "Residencial" },
  { text: "Cumplieron con los plazos exactos en nuestro edificio corporativo. Eso es oro.", author: "Ing. Roberto C.", role: "Constructora ABC" },
  { text: "El aislamiento acústico de las ventanas Nova cambió mi vida. Ya no escucho la avenida.", author: "Dra. Elena V.", role: "Cliente Privado" },
  { text: "Acabados de primera. No se ve ni un rastro de silicona mal puesta.", author: "Estudio 404", role: "Diseño Interior" },
  { text: "La fachada integral modernizó por completo la imagen de nuestra clínica.", author: "Clínica San Felipe", role: "Sector Salud" },
  { text: "Servicio post-venta real. Vinieron a ajustar un freno a los 6 meses sin costo.", author: "Hotel B", role: "Hospitality" },
]

export function TestimonialWall() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 overflow-hidden relative">
       <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Voces de Confianza</h2>
          <p className="text-muted-foreground">La reputación se construye proyecto a proyecto.</p>
       </div>

       <div className="h-[800px] overflow-hidden relative mask-gradient">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-24">
             
             {/* Column 1 */}
             <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                {[...reviews, ...reviews].map((review, i) => (
                   <ReviewCard key={`c1-${i}`} review={review} />
                ))}
             </motion.div>

             {/* Column 2 (Offset start) */}
             <motion.div style={{ y: y2 }} className="flex flex-col gap-8 -mt-24">
                {[...reviews].reverse().concat([...reviews].reverse()).map((review, i) => (
                   <ReviewCard key={`c2-${i}`} review={review} variant="dark" />
                ))}
             </motion.div>

          </div>
          
          {/* Fade Gradients for smooth edges */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
       </div>
    </section>
  )
}

function ReviewCard({ review, variant = "light" }: { review: Review, variant?: "light" | "dark" }) {
   return (
      <div className={cn(
         "p-8 rounded-3xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
         variant === "light" ? "bg-white border-gray-100" : "bg-white border-gray-100" // Both white for clean look
      )}>
         <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(s => <span key={s} className="text-accent text-sm">★</span>)}
         </div>
         <p className="text-lg md:text-xl font-medium text-gray-800 mb-6 leading-relaxed">
            &quot;{review.text}&quot;
         </p>
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm">
               {review.author[0]}
            </div>
            <div>
               <p className="font-bold text-sm text-primary">{review.author}</p>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">{review.role}</p>
            </div>
         </div>
      </div>
   )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const items = [
  {
    title: "Mamparas de Alta Gama",
    description: "Conexión fluida entre interior y exterior.",
    image: "/assets/services/mampara-2.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Fachadas Integrales",
    description: "Modernidad y resistencia.",
    image: "/assets/services/fachada-integral.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Ventanas Nova",
    description: "Aislamiento acústico.",
    image: "/assets/services/ventana-sistema-nova.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Techos Policarbonato",
    description: "Iluminación natural.",
    image: "/assets/services/techo-policarbonato.png",
    className: "md:col-span-2 md:row-span-1",
  },
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 auto-rows-[250px]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
          className={cn(
            "group relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500",
            item.className
          )}
        >
          {/* Background Image with Parallax-like scaling */}
          <div className="absolute inset-0 z-0 h-full w-full">
             <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          </div>

          {/* Icon Button (Top Right) */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                <ArrowUpRight className="w-5 h-5" />
             </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-6 z-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-gray-200 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
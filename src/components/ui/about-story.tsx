"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

interface StoryItem {
  year: string;
  title: string;
  text: string;
  img: string;
}

const timeline: StoryItem[] = [
  {
    year: "2010",
    title: "El Origen Artesanal",
    text: "Decoglass nace en un pequeño taller con una premisa radical: el vidrio no es solo material, es diseño.",
    img: "/assets/about-historia.jpg"
  },
  {
    year: "2015",
    title: "Expansión Industrial",
    text: "Implementamos hornos de templado propios y maquinaria CNC para dominar el mercado corporativo B2B.",
    img: "/assets/services/fachada-integral.png"
  },
  {
    year: "2026",
    title: "Tecnología Invisible",
    text: "Lideramos con domótica y sistemas minimalistas. Marcos más delgados; ingeniería más robusta.",
    img: "/assets/services/mampara-3.jpg"
  }
]

export function AboutStory() {
  const containerRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section ref={containerRef} className="bg-foreground text-background py-24 md:py-48 relative">
       <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* DESKTOP: STICKY LEFT IMAGE DECK */}
          <div className="hidden md:block md:w-1/2 relative h-[80vh] sticky top-24 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
             {timeline.map((item, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: activeImage === i ? 1 : 0 }}
                   transition={{ duration: 0.7 }}
                   className="absolute inset-0"
                >
                   <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover"
                   />
                   <div className="absolute inset-0 bg-black/40" />
                   <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                      <span className="text-white font-mono font-bold text-xl">{item.year}</span>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* RIGHT COLUMN (Mixed Mobile/Desktop) */}
          <div className="w-full md:w-1/2 py-0 md:py-24 space-y-24 md:space-y-[50vh]">
             {timeline.map((item, i) => (
                <div key={i}>
                   {/* MOBILE ONLY IMAGE */}
                   <div className="block md:hidden relative h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
                      <Image 
                         src={item.img} 
                         alt={item.title} 
                         fill 
                         className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-sm">
                         {item.year}
                      </div>
                   </div>

                   {/* Text Block */}
                   <StoryBlock 
                      item={item} 
                      index={i} 
                      onActive={setActiveImage} 
                   />
                </div>
             ))}
             
             <div className="hidden md:block h-[20vh]" />
          </div>
       </div>
    </section>
  )
}

function StoryBlock({ item, index, onActive }: { item: StoryItem, index: number, onActive: (i: number) => void }) {
   const ref = useRef(null)
   const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

   useEffect(() => {
      if (isInView) onActive(index)
   }, [isInView, index, onActive])

   return (
      <motion.div 
         ref={ref}
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         className="pl-0 md:pl-12"
      >
         <span className="text-accent font-mono text-sm tracking-widest mb-4 block">CAPÍTULO 0{index + 1}</span>
         <h3 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            {item.title}
         </h3>
         <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            {item.text}
         </p>
      </motion.div>
   )
}
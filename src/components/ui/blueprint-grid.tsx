"use client"

import { CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantía Total",
    desc: "Certificación de calidad en materiales premium y mano de obra."
  },
  {
    icon: Clock,
    title: "Entrega Puntual",
    desc: "Cronogramas estrictos. Tu tiempo es nuestro activo más valioso."
  },
  {
    icon: Users,
    title: "Expertise Técnico",
    desc: "Ingenieros y arquitectos supervisando cada milímetro."
  },
  {
    icon: CheckCircle2,
    title: "Acabados Perfectos",
    desc: "Sin silicona visible, sin errores. Perfección obsesiva."
  }
]

export function BlueprintGrid() {
  return (
    <section className="py-24 bg-gray-50">
       <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
             {reasons.map((r, i) => (
                <div key={i} className="bg-background p-12 hover:bg-white transition-colors duration-500 group">
                   <r.icon className="w-10 h-10 text-gray-300 group-hover:text-accent transition-colors duration-300 mb-6" />
                   <h3 className="text-2xl font-bold mb-4">{r.title}</h3>
                   <p className="text-muted-foreground">{r.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  )
}

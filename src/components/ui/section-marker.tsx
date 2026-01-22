import { cn } from "@/lib/utils"

export function SectionMarker({ number, title, className }: { number: string, title: string, className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 mb-12 text-primary", className)}>
      <span className="font-mono text-xs font-bold border-2 border-current px-2 py-0.5 rounded-full">
        {number}
      </span>
      <div className="h-0.5 w-12 bg-current" />
      <span className="font-mono text-sm font-bold uppercase tracking-[0.2em]">
        {title}
      </span>
    </div>
  )
}

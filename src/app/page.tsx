import { ArchitecturalHero } from "@/components/ui/architectural-hero"
import { HorizontalGallery } from "@/components/ui/horizontal-gallery"
import { AccordionServices } from "@/components/ui/accordion-services"
import { AboutStory } from "@/components/ui/about-story"
import { TestimonialSlider } from "@/components/ui/testimonial-slider"
import { GuaranteeGrid } from "@/components/ui/guarantee-grid"
import { ArchitecturalFooter } from "@/components/ui/architectural-footer"
import { SectionNavigator } from "@/components/ui/section-navigator"
import { MobileMenu } from "@/components/ui/mobile-menu"

export default function Home() {
  return (
    <main className="bg-background w-full relative selection:bg-accent selection:text-white">
      
      {/* 1. Global Navigation (Desktop) */}
      <SectionNavigator />
      
      {/* 2. Global Navigation (Mobile) */}
      <MobileMenu />

      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-noise mix-blend-overlay"></div>

      {/* 2. Hero Fullscreen */}
      <section id="hero">
         <ArchitecturalHero />
      </section>

      {/* 3. Manifesto Story */}
      <section id="about">
         <AboutStory />
      </section>

      {/* 4. Horizontal Scroll Showcase */}
      <section id="projects">
         <HorizontalGallery />
      </section>

      {/* 5. Interactive Accordion Services */}
      <section id="services">
         <AccordionServices />
      </section>

      {/* 6. Technical Guarantee */}
      <section id="why-us">
         <GuaranteeGrid />
      </section>

      {/* 7. Social Proof Slider */}
      <section id="testimonials">
         <TestimonialSlider />
      </section>

      {/* 8. Footer */}
      <section id="footer">
         <ArchitecturalFooter />
      </section>

    </main>
  )
}

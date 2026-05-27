import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ProjectsSection } from "@/components/projects-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}

import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ProjectsSection } from "@/components/projects-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

import { Metadata } from 'next'
import { BASE_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, INSTAGRAM_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'MF Digital Studio | Web Tasarım, E-Ticaret ve SEO Ajansı',
  description: 'MF Digital Studio; markalar için web sitesi, e-ticaret, SEO, sosyal medya yönetimi ve yönetim paneli çözümleri geliştiren dijital stüdyodur.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_DISPLAY,
    sameAs: [INSTAGRAM_URL],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
  }

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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

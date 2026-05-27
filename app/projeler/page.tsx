import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projeler | Web Tasarım, QR Menü ve Dijital Deneyim Referansları | MF Digital Studio",
  description: "MF Digital Studio tarafından tasarlanan web sitesi, QR menü, yönetim paneli ve dijital deneyim projelerini inceleyin."
}

import { FooterSection } from "@/components/footer-section"
import { ProjectsClient } from "./projects-client"

export default function ProjectsPage() {
  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <ProjectsClient />
      <div className="dark">
        <FooterSection />
      </div>
    </main>
  )
}



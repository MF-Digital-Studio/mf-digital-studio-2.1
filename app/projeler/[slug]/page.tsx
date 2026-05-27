import { projectsData } from "@/lib/projects"
import { notFound } from "next/navigation"
import { FooterSection } from "@/components/footer-section"
import { ProjectDetailClient } from "./project-detail-client"

import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return {
      title: "Proje Bulunamadı | MF Digital Studio",
      description: "Aradığınız proje bulunamadı."
    }
  }

  const title = `${project.title} | Proje Detayı | MF Digital Studio`
  const description = project.description.length > 155 ? project.description.substring(0, 155) + "..." : project.description

  return {
    title,
    description,
    alternates: {
      canonical: `/projeler/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `/projeler/${slug}`,
      type: "website",
      siteName: "MF Digital Studio",
    }
  }
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectIndex = projectsData.findIndex(p => p.slug === slug)
  const project = projectsData[projectIndex]

  if (!project) {
    notFound()
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1]
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0]

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <ProjectDetailClient 
        slug={project.slug} 
        prevSlug={prevProject.slug} 
        nextSlug={nextProject.slug} 
      />

      <div className="dark">
        <FooterSection />
      </div>
    </main>
  )
}

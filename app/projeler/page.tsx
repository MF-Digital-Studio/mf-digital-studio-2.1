"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"
import { projectsData } from "@/lib/projects"

const categories = ["Tümü", "Web Tasarım", "E-Ticaret", "SEO", "Dashboard"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü")

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "Tümü") return true
    return project.category === activeCategory
  })

  const featured = filteredProjects.filter(p => p.featured)
  const normal = filteredProjects.filter(p => !p.featured)

  return (
    <main className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <ProjectsHero />
      
      <section className="pb-24 md:pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Filters - Minimal & Editorial */}
          <div className="flex flex-wrap items-center gap-6 mb-16 md:mb-24 border-b border-black/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mr-4">Filtrele</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            <AnimatePresence mode="wait">
              {filteredProjects.length === 0 ? (
                <motion.div 
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-24 text-center text-black/40"
                >
                  Bu kategoride henüz proje bulunmuyor.
                </motion.div>
              ) : (
                <motion.div 
                  key="projects-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-24 lg:gap-32"
                >
                  {/* Featured Projects (Editorial layout) */}
                  {featured.length > 0 && (
                    <div className="flex flex-col gap-24 lg:gap-32">
                      {featured.map((project, index) => (
                        <div key={project.id} className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center`}>
                          {/* Image */}
                          <div className={`lg:col-span-8 aspect-[4/3] md:aspect-[16/10] w-full relative rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                            <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                          </div>
                          
                          {/* Content */}
                          <div className="lg:col-span-4 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6 text-xs font-bold uppercase tracking-widest text-black/40">
                              <span>0{project.id}</span>
                              <span className="w-6 h-[1px] bg-black/20" />
                              <span>{project.category}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 break-words">{project.title}</h2>
                            <p className="text-sm font-medium text-black/60 mb-6">{project.type}</p>
                            <p className="text-lg text-black/70 mb-8 leading-relaxed">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-10">
                              {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium border border-black/10 px-3 py-1.5 rounded-full text-black/60">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <Link href={`/projeler/${project.slug}`} className="group flex items-center gap-3 text-sm font-bold w-fit">
                              <span className="border-b border-black pb-0.5">Projeyi İncele</span>
                              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
                                <ArrowUpRight className="w-3 h-3" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Normal Projects Grid */}
                  {normal.length > 0 && (
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-8 lg:pt-16 border-t border-black/5">
                      {normal.map((project) => (
                        <div key={project.id} className="group flex flex-col h-full">
                          <div className="aspect-[4/3] mb-6 overflow-hidden rounded-2xl relative bg-black/5">
                            <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">{project.category}</span>
                          </div>
                          <p className="text-black/60 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                          <Link href={`/projeler/${project.slug}`} className="mt-auto flex items-center gap-2 text-sm font-bold text-black/50 hover:text-black transition-colors w-fit pt-4">
                            İncele <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      <div className="dark">
        <FooterSection />
      </div>
    </main>
  )
}

function ProjectsHero() {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl overflow-hidden">

        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-black/50"
        >
          <span className="h-[1px] w-8 bg-black/30" />
          PROJELERİMİZ
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[42px] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-black mb-6 md:mb-10 break-words"
          >
            Fikirleri güçlü dijital deneyimlere dönüştürüyoruz.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-black/60 text-lg md:text-xl leading-relaxed font-medium">
              Web, e-ticaret, SEO ve marka deneyimi odaklı projelerimizle markaların dijitalde daha güçlü görünmesini sağlıyoruz.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

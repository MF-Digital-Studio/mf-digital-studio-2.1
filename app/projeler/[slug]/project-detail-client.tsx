"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/lib/projects"

const fadeInUp = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

export function ProjectDetailClient({ slug, prevSlug, nextSlug }: { slug: string; prevSlug: string; nextSlug: string }) {
  const project = projectsData.find(p => p.slug === slug)
  const prevProject = projectsData.find(p => p.slug === prevSlug)
  const nextProject = projectsData.find(p => p.slug === nextSlug)

  if (!project || !prevProject || !nextProject) {
    return null
  }

  return (
    <>
      {/* Intro */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-white relative">
        <motion.div 
          className="container mx-auto px-4 md:px-6 max-w-7xl overflow-hidden"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-black/50 mb-12">
            <span className="h-[1px] w-8 bg-black/30" />
            PROJE DETAYI
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-8">
              <motion.h1 variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }} className="text-[42px] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-black mb-8 break-words">
                {project.title}
              </motion.h1>
              <motion.p variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }} className="text-xl md:text-2xl text-black/60 font-medium max-w-2xl leading-relaxed mb-12">
                {project.summary}
              </motion.p>
              
              <motion.div variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-wrap gap-4 items-center">
                <a 
                  href={project.liveUrl} 
                  target={project.liveUrl !== "#" ? "_blank" : undefined}
                  rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all ${
                    project.liveUrl !== "#" 
                    ? "bg-black text-white hover:scale-105" 
                    : "bg-black/5 text-black/40 cursor-not-allowed"
                  }`}
                >
                  Canlıyı Aç {project.liveUrl !== "#" && <ArrowUpRight className="w-4 h-4" />}
                </a>
                <Link href="/projeler" className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold border border-black/10 hover:bg-black/5 transition-colors">
                  Tüm Projelere Dön
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:col-span-4 flex flex-col gap-8 lg:pt-4 border-t lg:border-t-0 border-black/10 pt-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Hizmetler</h3>
                <div className="flex flex-col gap-2">
                  {project.services.map((s: string) => <span key={s} className="font-medium text-black/80">{s}</span>)}
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Yıl</h3>
                  <span className="font-medium text-black/80">{project.year}</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Platform</h3>
                  <span className="font-medium text-black/80">{project.platform}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Süreç</h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {project.process.map((p: string, i: number) => (
                    <span key={p} className="font-medium text-black/80">
                      {p}{i < project.process.length - 1 ? <span className="text-black/20 mx-2">/</span> : ''}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Müşteri Tipi</h3>
                <span className="font-medium text-black/80">{project.clientType}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Visual */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="w-full aspect-[4/3] md:aspect-[21/9] bg-black/5 overflow-hidden rounded-2xl relative"
          >
            <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col gap-16 md:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 pt-1 border-t border-black/10">Proje Özeti</h2>
              </div>
              <div className="md:col-span-8 text-lg md:text-xl text-black/80 leading-relaxed font-medium">
                {project.sections.ozet}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 pt-1 border-t border-black/10">Hedef / Problem</h2>
              </div>
              <div className="md:col-span-8 text-lg md:text-xl text-black/80 leading-relaxed font-medium">
                {project.sections.hedef}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 pt-1 border-t border-black/10">Çözüm / Yaklaşım</h2>
              </div>
              <div className="md:col-span-8 text-lg md:text-xl text-black/80 leading-relaxed font-medium">
                {project.sections.cozum}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 pt-1 border-t border-black/10">Sonuç / Kazanım</h2>
              </div>
              <div className="md:col-span-8 text-lg md:text-xl text-black/80 leading-relaxed font-medium">
                {project.sections.sonuc}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Secondary Visual */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-square md:aspect-[16/9] bg-black/5 overflow-hidden rounded-2xl relative"
          >
             <img src={project.secondaryImage} alt={`${project.title} Detay`} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 md:py-24 border-t border-black/10 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-center gap-12"
          >
            
            <Link href={`/projeler/${prevProject.slug}`} className="group flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Önceki Proje
              </span>
              <span className="text-2xl md:text-3xl font-bold">{prevProject.title}</span>
            </Link>

            <Link href="/projeler" className="w-16 h-16 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors shrink-0">
               <div className="w-4 h-4 grid grid-cols-2 gap-1">
                 <div className="bg-black/40 rounded-[1px]" />
                 <div className="bg-black/40 rounded-[1px]" />
                 <div className="bg-black/40 rounded-[1px]" />
                 <div className="bg-black/40 rounded-[1px]" />
               </div>
            </Link>

            <Link href={`/projeler/${nextProject.slug}`} className="group flex flex-col gap-2 items-center md:items-end text-center md:text-right w-full md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                Sonraki Proje <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-2xl md:text-3xl font-bold">{nextProject.title}</span>
            </Link>

          </motion.div>
        </div>
      </section>
    </>
  )
}

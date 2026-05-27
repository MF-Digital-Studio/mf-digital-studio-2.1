import { Fragment } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/lib/projects"

type Project = typeof projectsData[0]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      href={`/projeler/${project.slug}`}
      className="group relative flex h-[320px] w-[480px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] border border-transparent"
    >
      <img 
        src={project.mainImage} 
        alt={project.title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105" 
      />
      
      {/* Noise Overlay for Depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Right Pill */}
      <div className="absolute right-5 top-5 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10">
        <span className="text-[11px] font-medium text-white tracking-wide">
          {project.category}
        </span>
      </div>

      {/* Hover Arrow */}
      <div className="absolute right-5 top-20 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
        <ArrowUpRight className="h-6 w-6 text-white" />
      </div>

      {/* Bottom Text Content */}
      <div className="absolute bottom-6 left-6 flex flex-col">
        <h4 className="font-syne text-[20px] font-bold text-white mb-1 transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h4>
        <span className="text-[12px] uppercase tracking-[0.12em] text-white/70 font-medium transition-transform duration-300 group-hover:-translate-y-1">
          {project.type}
        </span>
      </div>
    </Link>
  )
}

function MarqueeRow({ items }: { items: Project[] }) {
  const repeatedItems = [...items, ...items, ...items]
  
  return (
    <div className="flex w-full overflow-hidden group">
      <div 
        className="flex w-max items-center gap-[20px] animate-marquee"
        style={{ animationDuration: '60s' }}
      >
        {[0, 1].map((iteration) => (
          <div key={iteration} className="flex shrink-0 items-center gap-[20px] px-[10px]">
            {repeatedItems.map((project, index) => (
              <ProjectCard key={`${iteration}-${index}`} project={project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-[120px]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="font-syne mb-4 text-[12px] uppercase tracking-[0.2em] text-accent">
              PROJELERİMİZ
            </span>
            <h2 className="font-syne text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Seçkin Çalışmalarımız
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dijital dünyadaki izimiz
            </p>
          </div>
          
          <Link href="/projeler" className="group flex items-center gap-2 text-sm text-white font-medium pb-1 relative">
            Tüm Projeler &rarr;
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      {/* Marquee Row */}
      <MarqueeRow items={projectsData} />
    </section>
  )
}

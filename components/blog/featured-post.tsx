import Link from "next/link"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog"
import { ArrowRight } from "lucide-react"

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xl transition-all duration-300 items-center"
    >
      <div className="order-2 lg:order-1 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-500 mb-6">
          <span className="px-3 py-1 rounded-full border border-zinc-200 text-zinc-800 font-medium tracking-wider uppercase">
            {post.category}
          </span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-zinc-900 group-hover:text-black transition-colors">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0 z-10" />
            {post.title}
          </Link>
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed mb-8 md:mb-12">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-sm font-bold tracking-wider uppercase text-zinc-400 group-hover:text-black transition-colors">
          <span>Yazıyı Oku</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
      <div className="order-1 lg:order-2 aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="text-zinc-300 font-syne text-9xl font-black tracking-tighter opacity-50 select-none mix-blend-overlay">
          MF.
        </div>
      </div>
    </motion.article>
  )
}

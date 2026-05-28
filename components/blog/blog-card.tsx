import Link from "next/link"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {post.coverImage && (
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-zinc-100">
          <Image
            src={post.coverImage}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs md:text-sm text-zinc-500 mb-4">
          <span className="font-medium tracking-wider uppercase text-zinc-800">{post.category}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 line-clamp-2 text-zinc-900 group-hover:text-black transition-colors">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0 z-10" />
            {post.title}
          </Link>
        </h3>
        <p className="text-zinc-600 line-clamp-3 mb-8 text-sm md:text-base leading-relaxed">
          {post.excerpt}
        </p>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-zinc-400 group-hover:text-black transition-colors mt-auto">
        <span>Devamını Oku</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.article>
  )
}

"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { BlogPost } from "@/lib/blog"

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24 text-zinc-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition-colors text-sm font-bold tracking-wider uppercase mb-12">
              <ArrowLeft className="w-4 h-4" />
              Bloga Dön
            </Link>
          </motion.div>

          {/* Article Hero */}
          <header className="mb-16">
            <motion.div
              className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-500 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="px-3 py-1 rounded-full border border-zinc-200 text-zinc-800 font-medium tracking-wider uppercase">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.15] text-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {post.excerpt}
            </motion.p>
          </header>

          <motion.div
            className="w-full h-px bg-zinc-200 mb-16 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {post.coverImage && (
            <motion.div
              className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-zinc-200 bg-zinc-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={post.coverImage}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            className="w-full max-w-none 
              [&>h2]:font-black [&>h2]:tracking-tight [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:text-zinc-900
              [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:text-zinc-800
              [&>p]:text-zinc-700 [&>p]:leading-[1.8] [&>p]:text-lg md:[&>p]:text-xl [&>p]:mb-8
              [&>ul]:text-zinc-700 [&>ul]:leading-[1.8] [&>ul]:text-lg md:[&>ul]:text-xl [&>ul]:mb-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3
              [&>ol]:text-zinc-700 [&>ol]:leading-[1.8] [&>ol]:text-lg md:[&>ol]:text-xl [&>ol]:mb-8 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-3
              [&>a]:text-black [&>a]:font-medium [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-zinc-600 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.content }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          <div className="w-full h-px bg-zinc-200 mt-24 mb-16" />

          {/* Article CTA */}
          <motion.div
            className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 mb-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-black mb-4 text-zinc-900">Daha fazlasına mı ihtiyacınız var?</h3>
            <p className="text-zinc-500 mb-8 text-base md:text-lg">
              Web sitenizin işletmeniz için daha güçlü çalışmasını istiyorsanız, MF Digital Studio ile ihtiyacınıza uygun bir yol haritası çıkarabiliriz.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold tracking-wide hover:bg-zinc-800 hover:-translate-y-1 transition-all shadow-lg shadow-black/20"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>

        {/* Related Posts - Full Width inside Container */}
        {relatedPosts.length > 0 && (
          <motion.div
            className="pt-16 border-t border-zinc-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-black mb-12 text-zinc-900">Benzer Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex flex-col justify-between h-full p-6 md:p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {relatedPost.coverImage && (
                      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-zinc-100">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.imageAlt || relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow">
                      <div className="text-xs text-zinc-500 mb-4 font-bold tracking-wider uppercase">{relatedPost.category}</div>
                      <h4 className="font-bold text-xl mb-4 text-zinc-900 group-hover:text-black transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-zinc-500 text-sm line-clamp-3 mb-6">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-zinc-400 group-hover:text-black transition-colors mt-auto">
                      <span>Devamını Oku</span>
                      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-180" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </article>
  )
}

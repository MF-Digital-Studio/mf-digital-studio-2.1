"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { FeaturedPost } from "@/components/blog/featured-post"
import { CategoryFilter } from "@/components/blog/category-filter"
import { BlogServiceBridge } from "@/components/blog/blog-service-bridge"

interface BlogPageClientProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export function BlogPageClient({ initialPosts, categories }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü")

  const filteredPosts = activeCategory === "Tümü" 
    ? initialPosts 
    : initialPosts.filter(post => post.category === activeCategory)

  // Find the first featured post for the top section (only show if viewing "Tümü")
  const featuredPost = activeCategory === "Tümü" ? initialPosts.find(post => post.featured) : null;
  
  // The rest of the posts to show in the grid
  const gridPosts = featuredPost 
    ? filteredPosts.filter(post => post.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div className="min-h-screen bg-white pt-32 text-zinc-900">
      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 mb-16 md:mb-24 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-zinc-200 text-zinc-600 text-xs font-bold tracking-widest uppercase mb-6 bg-zinc-50">
            BLOG
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-zinc-900">
            Dijital büyüme, web tasarım ve SEO üzerine uygulanabilir fikirler.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl">
            Web sitesi, e-ticaret, SEO ve sosyal medya süreçlerinde işletmelerin daha görünür, güvenilir ve dönüşüm odaklı hale gelmesi için hazırladığımız rehberler.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6 mb-24">
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {featuredPost && (
          <div className="mb-16 md:mb-24">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {gridPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-zinc-200 rounded-3xl bg-zinc-50">
            <p className="text-zinc-500 text-lg">Bu kategoride henüz yazı bulunmuyor.</p>
          </div>
        )}
      </section>

      {/* Spacing before footer since footer is black */}
      <div className="pb-24">
        <BlogServiceBridge />
      </div>
    </div>
  )
}

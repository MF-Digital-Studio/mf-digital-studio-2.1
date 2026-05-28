import { notFound } from "next/navigation"
import { Metadata } from "next"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog"
import { BASE_URL } from "@/lib/constants"
import { FooterSection } from "@/components/footer-section"
import { BlogDetailClient } from "./blog-detail-client"
interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: "Sayfa Bulunamadı | MF Digital Studio",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["MF Digital Studio"],
      siteName: "MF Digital Studio",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "MF Digital Studio",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "MF Digital Studio",
      "url": BASE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${BASE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${BASE_URL}/blog/${post.slug}`
      }
    ]
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar-track {
          background: #f5f5f5 !important;
        }
        * {
          scrollbar-color: #22c55e #f5f5f5 !important;
        }
      `}} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <BlogDetailClient post={post} relatedPosts={relatedPosts} />

      <FooterSection />
    </>
  )
}

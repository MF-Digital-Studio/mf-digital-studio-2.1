import { Metadata } from "next"
import { BASE_URL } from "@/lib/constants"
import { blogPosts, getAllCategories } from "@/lib/blog"
import { BlogPageClient } from "./blog-page-client"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Blog | Web Tasarım, SEO ve Dijital Pazarlama Rehberleri | MF Digital Studio",
  description: "MF Digital Studio blogunda web tasarım, SEO, e-ticaret, sosyal medya ve dijital büyüme üzerine işletmeler için uygulanabilir rehberler ve stratejiler bulabilirsiniz.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Web Tasarım, SEO ve Dijital Pazarlama Rehberleri | MF Digital Studio",
    description: "MF Digital Studio blogunda web tasarım, SEO, e-ticaret, sosyal medya ve dijital büyüme üzerine işletmeler için uygulanabilir rehberler ve stratejiler bulabilirsiniz.",
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: "MF Digital Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Tasarım, SEO ve Dijital Pazarlama Rehberleri | MF Digital Studio",
    description: "MF Digital Studio blogunda web tasarım, SEO, e-ticaret, sosyal medya ve dijital büyüme üzerine işletmeler için uygulanabilir rehberler ve stratejiler bulabilirsiniz.",
  },
}

export default function BlogIndexPage() {
  const categories = getAllCategories()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MF Digital Studio Blog",
    "url": `${BASE_URL}/blog`,
    "description": "Web tasarım, SEO, e-ticaret ve sosyal medya süreçlerinde rehberler.",
    "publisher": {
      "@type": "Organization",
      "name": "MF Digital Studio",
      "url": BASE_URL
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
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPageClient initialPosts={blogPosts} categories={categories} />
      <FooterSection />
    </>
  )
}

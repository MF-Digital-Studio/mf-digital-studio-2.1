import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'
import { blogPosts } from '@/lib/blog'
import { projectsData } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/hakkimizda',
    '/projeler',
    '/blog',
    '/iletisim',
  ].map((route) => {
    let priority = 0.8
    if (route === '') priority = 1.0
    if (route === '/iletisim') priority = 0.9
    if (route === '/projeler' || route === '/blog') priority = 0.8
    if (route === '/hakkimizda') priority = 0.6

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority,
    }
  })

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const projectRoutes = projectsData.map((project) => ({
    url: `${BASE_URL}/projeler/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes, ...projectRoutes]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/cozumler',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/blog/yapay-zeka-web-sitesi',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
}

export default nextConfig

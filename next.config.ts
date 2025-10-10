const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1rgjmn2wmqeif.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'f4.bcbits.com',
        pathname: '/**',
      },
    ],
    domains: ['cloudfront.neter.me', 'unsplash.com'],
  },
}

export default nextConfig

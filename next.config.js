/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress.nextjswp.com'
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com'
      }
    ]
  },
  reactStrictMode: false
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true
  // }
}

module.exports = nextConfig

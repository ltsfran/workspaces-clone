/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
          ref: true
        }
      }]
    })
    return config
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'picsum.photos'
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  }
}

module.exports = nextConfig

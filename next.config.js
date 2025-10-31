/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['164.92.81.155', '172.20.60.105']
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com']
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    urlImports: ['https://cdn.skypack.dev']
  }
}

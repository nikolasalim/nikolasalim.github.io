const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/portfolio/' : '',
}

module.exports = nextConfig

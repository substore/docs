const withNextra = require('nextra')({
 theme: 'nextra-theme-docs',
 themeConfig: './theme.config.jsx',
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nijmeh.cloud',
        port: '',
      },
    ],
  },
})

module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })


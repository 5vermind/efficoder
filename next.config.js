/** @type {import('next').NextConfig} */
const nextConfig = {}

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  webpack: (config) => {
    if (!options.isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['javascript', 'typescript', 'css', 'html', 'json'],
        }),
      )
      return config
    }
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

// module.exports = nextConfig

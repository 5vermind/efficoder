/** @type {import('next').NextConfig} */
const nextConfig = {}

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ["javascript", "typescript", "css", "html", "json"],
      })
    );
    return config;
  },
};

// module.exports = nextConfig

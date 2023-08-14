/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  }
}
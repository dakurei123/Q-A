/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  env: {
    API_AUTH_URL: process.env.API_AUTH_URL,
    API_NOTIFICATION_URL: process.env.API_NOTIFICATION_URL,
  }
}
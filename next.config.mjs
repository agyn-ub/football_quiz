/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,  // Force strict TypeScript checking
  },
  eslint: {
    ignoreDuringBuilds: false, // Force ESLint checking
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
}

export default config 
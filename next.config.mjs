/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
}

export default config 
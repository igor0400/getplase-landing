/** @type {import('next').NextConfig} */
const nextConfing = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['api.onyx24.online', 'onyx24.online', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.onyx24.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfing;

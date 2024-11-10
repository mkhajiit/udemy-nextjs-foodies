/** @type {import('next').NextConfig} */
const nextConfig = {};

// nextjs의 Image를 사용하려면 firebase storage의 도메인을 추가해야함
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
};

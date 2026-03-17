/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // Tüm alt yollara izin ver
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Tüm alt yollara izin ver
      },
      // Eğer başka domainlerden de (örneğin GitHub veya kendi API'n) 
      // görsel gelecekse onları da buraya ekleyebilirsin
    ],
  },
};

export default nextConfig;

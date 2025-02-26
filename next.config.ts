import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  //   assetPrefix: "https://meu-amigo-misterio.vercel.app",
};

export default nextConfig;

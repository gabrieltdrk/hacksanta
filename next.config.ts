import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
//   assetPrefix: "https://meu-amigo-misterio.vercel.app",
};

export default nextConfig;

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
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rbleucyoxsngvodjkkgc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/projetos/**",
      },
    ],
  },

  // assetPrefix: "https://meu-amigo-misterio.vercel.app",
};

export default nextConfig;

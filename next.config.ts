import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/grupo-cvrbg",
        destination: "/sobre",
        permanent: true,
      },
      {
        source: "/estrutura-operacional",
        destination: "/sobre",
        permanent: true,
      },
      {
        source: "/atuacao-b2g",
        destination: "/solucoes",
        permanent: true,
      },
      {
        source: "/presenca-parcerias",
        destination: "/sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

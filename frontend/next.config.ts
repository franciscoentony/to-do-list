import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Essencial para criar a pasta 'out'
  distDir: 'out',   // Força o nome da pasta de saída
  images: {
    unoptimized: true, // Obrigatório para o GitHub Pages
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Evita que o Next infira a raiz errada do workspace (há lockfiles fora do projeto).
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;

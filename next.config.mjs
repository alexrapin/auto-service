/** @type {import('next').NextConfig} */
const repoName = "auto-service";

const nextConfig = {
  output: "export",
  distDir: "out",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  compiler: {
    emotion: true,
  },

  images: {
    unoptimized: true, // GitHub Pages не підтримує server-side image optimization
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import withExportImages from "next-export-optimize-images";

const repoName = "auto-service"; // ⚡️ имя твоего репозитория на GitHub

const nextConfig = withExportImages({
  // важливо для GitHub Pages
  output: "export",
  distDir: "out", // щоб Next.js збирав у "out" (GitHub Pages читає звідти)

  // базовий шлях (щоб працювали стилі, картинки, роутинг)
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // компілятор для Emotion (щоб SSR стилі не губилися)
  compiler: {
    emotion: true,
  },
});

export default nextConfig;

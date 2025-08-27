/** @type {import('next').NextConfig} */
import withExportImages from "next-export-optimize-images";

const repoName = "auto-service"; // ⚡️ имя твоего репозитория на GitHub

const nextConfig = withExportImages({
  // output: "export", // для GitHub Pages
  // basePath: `/${repoName}`, // для GitHub Pages
  // assetPrefix: `/${repoName}/`, // для GitHub Pages
  compiler: {
    emotion: true,
  },
});

export default nextConfig;

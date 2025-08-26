/** @type {import('next').NextConfig} */
import withExportImages from "next-export-optimize-images";

const repoName = "auto-service";

const nextConfig = withExportImages({
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  compiler: {
    emotion: true,
  },
});

export default nextConfig;

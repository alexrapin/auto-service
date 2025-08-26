/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
  compiler: {
    emotion: true,
  },
});

export default nextConfig;
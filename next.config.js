/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignore specific warnings or errors
    config.plugins.push(
      new webpack.IgnorePlugin('@/components/myComponents/OurTeam')
    );

    return config;
  },

  images: {
    // domains: ['wp.zelisline.com'],
    unoptimized: true,

  },
};


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignore specific module/component
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /@\/components\/myComponents\/OurTeam/,
      })
    );

    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = nextConfig;

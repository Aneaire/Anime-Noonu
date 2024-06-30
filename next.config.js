/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

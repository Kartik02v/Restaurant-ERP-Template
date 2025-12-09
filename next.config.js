/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 1. Existing Google patterns
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        pathname: "/profile/picture/**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com",
        pathname: "/profile/picture/**",
      },

      // 2. Pexels images (for your menu images)
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

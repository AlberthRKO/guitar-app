/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // config de cloudinary
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

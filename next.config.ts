import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.pexels.com','encrypted-tbn0.gstatic.com','www.mscorpres.com','res.cloudinary.com'],
  },
};

export default nextConfig;

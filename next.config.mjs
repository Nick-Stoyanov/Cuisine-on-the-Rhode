/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    reactStrictMode: true, // Enables React strict mode
    images: {
        unoptimized: true, // Disables default image optimization for GitHub Pages
    },
    assetPrefix: isProd ? "/Cuisine-on-the-Rhode/" : "", // Prefix for assets in production
    basePath: isProd ? "/Cuisine-on-the-Rhode" : "", // Base path for routing in production
    output: "export", // Ensures a static export
};

export default nextConfig;

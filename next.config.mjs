/** @type {import('next').NextConfig} */
const nextConfig = {};
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/Cuisine-on-the-Rhode/' : '',
    basePath: isProd ? '/Cuisine-on-the-Rhode' : '',
    output: 'export'
};

export default nextConfig;

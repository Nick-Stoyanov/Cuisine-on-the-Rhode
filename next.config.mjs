const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: false, // Let Vercel handle image optimization
    },
    output: undefined, // Remove 'export' to enable Vercel's dynamic builds
};

export default nextConfig;

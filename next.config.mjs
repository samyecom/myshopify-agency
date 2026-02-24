/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
        ],
    },
    eslint: {
        // On Vercel, we don't want ESLint errors to fail the build
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

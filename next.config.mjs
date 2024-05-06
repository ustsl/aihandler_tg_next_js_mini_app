/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'cdn4.cdn-telegram.org',
            },

        ],
    },
    env: {
        API_SECRET_KEY: process.env.API_SECRET_KEY,
    }
};

export default nextConfig;

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
        PAYMENT_SECRET_KEY: process.env.PAYMENT_SECRET_KEY,
        CRYPTOCLOUD_SECRET_KEY: process.env.CRYPTOCLOUD_SECRET_KEY,
        CRYPTOCLOUD_SHOP_ID: process.env.CRYPTOCLOUD_SHOP_ID,
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/insights/:slug*',
          destination: 'https://dev-api.topgeo.ai/cms/render/pinnacle-one-lac.vercel.app/:slug*',
        },
      ],
    };
  },
};

module.exports = nextConfig;

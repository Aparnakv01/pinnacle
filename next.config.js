/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/insights/:slug*',
          destination: 'https://dev-api.topgeo.ai/cms/render/my-web-app--project-1087982776454717284.asia-southeast1.hosted.app/:slug*',
        },
      ],
    };
  },
};

module.exports = nextConfig;

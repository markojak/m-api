/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api',
        destination: '/api/info',
      },
    ]
  },  
  reactStrictMode: true,
  outputFileTracing: true,
};

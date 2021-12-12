/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/me',
        destination: '/api/info',
      },
    ]
  },  
  reactStrictMode: true,
  outputFileTracing: true,
};

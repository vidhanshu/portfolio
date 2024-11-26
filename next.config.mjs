/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [{ hostname: "i.postimg.cc" }, { hostname: "miro.medium.com" }, { hostname: "external-preview.redd.it" }, { hostname: "www.aihr.com" }],
  },
};

export default nextConfig;

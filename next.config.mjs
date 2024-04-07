/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/invitation",
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
//   basePath: "/invitation",
  output: "export",
  reactStrictMode: true,
images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
},
};

export default nextConfig;

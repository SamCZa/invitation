/** @type {import('next').NextConfig} */
const nextConfig = {
//   basePath: "/invitation",
  output: "export",
  reactStrictMode: true,
images: {
    loader: "imgix",
    path: "",
},
};

export default nextConfig;

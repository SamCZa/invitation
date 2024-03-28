/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/invitation",
  output: "export",
  reactStrictMode: true,
images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
};

export default nextConfig;

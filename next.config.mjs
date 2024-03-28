/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/invitation",
  output: "export",
  reactStrictMode: true,
images: {
    disableStaticImages: true,
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

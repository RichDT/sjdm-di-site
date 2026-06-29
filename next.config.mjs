/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dandicommittee",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/dandicommittee",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'imgur.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }

module.exports = {
  images: {
    domains: ['imgur.com', 'i.imgur.com'],
  },
};

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /.svg$/,
//       issuer: {
//         test: /.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }

// module.exports = {
//   images: {
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// }
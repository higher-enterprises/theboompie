export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  async redirects() {
  return [
    {
      source: '/webmail',
      destination: 'https://gcam1071.siteground.biz/webmail/mail/',
      permanent: false
    },
    {
      source: '/webmail/',
      destination: 'https://gcam1071.siteground.biz/webmail/mail/',
      permanent: false
    }
  ];
}
};


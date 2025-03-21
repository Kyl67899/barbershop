import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "th.bing.com", "wallpapercave.com", "images.pexels.com", "static.vecteezy.com", 
      "hairstylesfeed.com", "img.freepik.com", "www.robertjohnhair.co.uk" , 
      "wpcdn.us-midwest-1.vip.tn-cloud.net",  "www.menshairstylestoday.com", "evoke.ie", 
      "luxurymobilebarbershop.com", "images.squarespace-cdn.com", "media.timeout.com",
    ],
  },
};

export default nextConfig;

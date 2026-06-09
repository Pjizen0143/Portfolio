import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thanaphat-portfolio.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://thanaphat-portfolio.vercel.app/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
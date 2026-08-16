import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Pinned per page — bump the date when a page's content actually changes.
// A build-time `new Date()` tells crawlers everything changed on every deploy.
const LAST_MODIFIED = {
  home: "2026-08-16",
  contact: "2026-08-16",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED.contact,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

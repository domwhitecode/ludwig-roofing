/**
 * Canonical origin for the site — every canonical URL, sitemap entry, OG tag,
 * and JSON-LD field is derived from it.
 *
 * Defaults to production so a missing env var can never leak a localhost or
 * preview-deploy URL into indexed markup. Override via NEXT_PUBLIC_SITE_URL
 * for local development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ludwigroofing.org"
).replace(/\/+$/, "");

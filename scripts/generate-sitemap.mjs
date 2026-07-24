// Regenerates public/sitemap.xml from the product data.
// Runs before every build so the sitemap can never drift out of sync.
import { writeFileSync, readFileSync } from "node:fs";

const SITE = "https://www.vetrileaf.com";
const today = new Date().toISOString().slice(0, 10);

const src = readFileSync("src/data/products.ts", "utf8");
const slugs = [...src.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]);

if (slugs.length === 0) {
  console.error("generate-sitemap: no product slugs found — aborting");
  process.exit(1);
}

const urls = [
  { loc: "/", priority: "1.0", freq: "weekly" },
  { loc: "/products", priority: "0.9", freq: "weekly" },
  ...slugs.map((s) => ({ loc: `/products/${s}`, priority: "0.8", freq: "monthly" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`generate-sitemap: wrote ${urls.length} URLs (${slugs.length} products)`);

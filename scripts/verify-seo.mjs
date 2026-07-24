// Audits the generated static site: unique titles, canonicals, schema, prerendered text.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

const pages = walk("dist").sort();
const titles = new Map();
const descs = new Map();
let fail = 0;

console.log(`\nAuditing ${pages.length} generated pages\n${"─".repeat(78)}`);

for (const p of pages) {
  const h = readFileSync(p, "utf8");
  const title = (h.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (h.match(/name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1] || "";
  const ogImg = (h.match(/property="og:image" content="([^"]*)"/) || [])[1] || "";
  const schemas = [...h.matchAll(/application\/ld\+json[^>]*>(\{.*?\})<\/script>/gs)]
    .map((m) => { try { return JSON.parse(m[1])["@type"]; } catch { return null; } })
    .filter(Boolean);

  const text = h
    .slice(h.indexOf("<body"))
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const issues = [];
  if (!title) issues.push("no title");
  if (title.length > 65) issues.push(`title ${title.length} chars`);
  if (!desc) issues.push("no description");
  if (desc && (desc.length < 70 || desc.length > 165)) issues.push(`desc ${desc.length} chars`);
  if (!canon) issues.push("no canonical");
  if (!ogImg) issues.push("no og:image");
  if (text.length < 500) issues.push(`thin content ${text.length}`);
  if ((h.match(/<title/g) || []).length > 1) issues.push("duplicate title");
  if (titles.has(title)) issues.push(`title dupes ${titles.get(title)}`);
  if (descs.has(desc)) issues.push(`desc dupes ${descs.get(desc)}`);
  titles.set(title, p);
  descs.set(desc, p);

  const route = p.replace("dist", "").replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  const mark = issues.length ? "FAIL" : " ok ";
  if (issues.length) fail++;
  console.log(`${mark}  ${route.padEnd(32)} ${String(text.length).padStart(5)} chars  ${schemas.join(", ")}`);
  issues.forEach((i) => console.log(`       └─ ${i}`));
}

console.log("─".repeat(78));
console.log(fail === 0 ? `All ${pages.length} pages passed\n` : `${fail} page(s) with issues\n`);
process.exit(fail === 0 ? 0 : 1);

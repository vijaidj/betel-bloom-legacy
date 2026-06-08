# Vetri Leaf — Sri Sholavandan Heritage Vetrilai

Marketing and e-commerce site for **Vetri Leaf**, a GI-certified Sholavandan betel
leaf (vetrilai) business from Sholavandan, Madurai district, Tamil Nadu, India.

🌐 **Live site:** https://www.vetrileaf.com

The site showcases GI-certified Sholavandan betel leaves and derived products for
weddings, thamboolam, pooja and bulk orders, with farm-direct supply and pan-India
delivery.

## Tech stack

- **Vite** — build tool
- **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** components
- **EmailJS** — contact form delivery
- **Google Analytics (GA4)** — with WhatsApp click & phone call event tracking
- SEO: structured data (Product, LocalBusiness, FAQ, BreadcrumbList), sitemap, web manifest, geo tags

## Local development

Requires Node.js and npm ([install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Install dependencies
npm install

# Start the dev server (auto-reload at http://localhost:8080)
npm run dev

# Lint
npm run lint

# Run tests
npm run test

# Production build (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

## Deployment (Hostinger)

The production site is hosted on **Hostinger** and managed via this GitHub repo.

1. Run `npm run build` to generate the static `/dist` folder.
2. Upload the contents of `/dist` to the Hostinger `public_html` directory.
3. Ensure the `.htaccess` (SPA fallback, HTTPS/www redirects, caching, gzip, security
   headers) is present in `public_html` so client-side routing works correctly.

> Note: `vite.config.ts` controls the asset `base` path. For a root-domain static
> deploy, `base` should match how assets are served from `public_html`.

## Project structure

```
public/            Static assets, favicon, manifest, sitemap, robots.txt
src/
  assets/          Images and logo
  components/       UI sections (Hero, Products, FAQ, Contact, etc.)
  pages/           Route pages (Index, NotFound)
  hooks/ lib/      Helpers and utilities
index.html         Entry point + SEO meta and structured data
```

import { Head } from "vite-react-ssg";
import { SITE_URL } from "@/data/products";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  /** Extra JSON-LD blocks for this route */
  schema?: Record<string, unknown>[];
}

const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;

/** Present on every page. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "VetriLeaf",
  legalName: "Sri Sholavandan Heritage Vetrilai",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-192.png`,
  email: "vetrileaf@gmail.com",
  telephone: "+919600441284",
  description:
    "GI-certified Sholavandan betel leaf farm and producer of natural betel leaf products. Third-generation farmers in Madurai district, Tamil Nadu.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sholavandan",
    addressLocality: "Madurai District",
    addressRegion: "Tamil Nadu",
    postalCode: "625221",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/vetrileaf/",
    "https://facebook.com/SriSholavandanHeritage",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "VetriLeaf",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en-IN", "ta-IN"],
};

const Seo = ({ title, description, path, keywords, image, schema = [] }: SeoProps) => {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_OG;

  return (
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VetriLeaf" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;

/**
 * Brand statement in a hand-drawn style: line-art betel leaf borders, an
 * ornamental divider with a betel leaf at its centre, a script heading and
 * a book-serif paragraph. All artwork is inline SVG drawn for this page.
 */

/** One heart-shaped betel leaf with midrib and curved veins; base at (0,0), tip pointing down. */
const LeafPaths = () => (
  <>
    <path d="M0 6 C-16 -8 -44 0 -42 28 C-40 54 -16 74 0 98 C16 74 40 54 42 28 C44 0 16 -8 0 6 Z" />
    <path d="M0 6 L0 94" />
    <path d="M0 16 C-10 22 -22 30 -32 44" />
    <path d="M0 16 C10 22 22 30 32 44" />
    <path d="M0 34 C-8 42 -16 52 -22 64" />
    <path d="M0 34 C8 42 16 52 22 64" />
    <path d="M0 54 C-5 60 -9 68 -11 76" />
    <path d="M0 54 C5 60 9 68 11 76" />
    <path d="M0 6 C0 -2 3 -10 9 -16" />
  </>
);

/** A leaf placed on a vine: position, rotation and scale. */
const Leaf = ({ x, y, r, s = 1 }: { x: number; y: number; r: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <LeafPaths />
  </g>
);

/**
 * Betel leaf in line art: heart-shaped base with two rounded lobes, a gently
 * curved drip tip, and the arched veins that run from the base to the tip.
 * Outline only, like a pen drawing. Base at (0,0), leaf along +y.
 */
const LineLeaf = () => (
  <>
    <path d="M0 0 C-7 -11 -29 -14 -40 2 C-51 20 -44 50 -27 74 C-15 91 -4 104 7 120 C5 104 11 90 23 74 C41 50 49 21 39 3 C29 -13 8 -11 0 0 Z" />
    <path d="M0 0 C2 40 4 80 7 118" />
    <path d="M0 2 C-13 20 -22 50 -16 88" />
    <path d="M0 2 C13 20 23 50 19 86" />
    <path d="M0 2 C-23 12 -35 32 -33 56" />
    <path d="M0 2 C23 12 36 31 35 54" />
    <path d="M-16 38 C-23 44 -28 50 -31 58" strokeWidth={0.8} />
    <path d="M17 38 C24 44 29 50 32 57" strokeWidth={0.8} />
    <path d="M-12 62 C-16 68 -19 74 -21 80" strokeWidth={0.8} />
    <path d="M14 62 C18 68 21 74 23 79" strokeWidth={0.8} />
    <path d="M-36 20 C-30 22 -24 26 -20 30" strokeWidth={0.7} />
    <path d="M37 19 C31 21 25 25 21 29" strokeWidth={0.7} />
    {/* Stalk */}
    <path d="M0 0 C0 -8 4 -16 11 -22" />
  </>
);

type L = { x: number; y: number; r: number; s: number };
const Leaves = ({ items }: { items: L[] }) => (
  <>
    {items.map((l, i) => (
      <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
        <LineLeaf />
      </g>
    ))}
  </>
);

// Front vine: full-strength lines. Heaviest at the corners, as in a hand-drawn border.
const frontLeaves: L[] = [
  // bottom cluster
  { x: 30, y: 860, r: 128, s: 1.25 },
  { x: 70, y: 845, r: 210, s: 1.05 },
  { x: 120, y: 880, r: 245, s: 1.2 },
  { x: 8, y: 770, r: 70, s: 1.1 },
  { x: 92, y: 760, r: -58, s: 1.0 },
  // along the stem
  { x: 66, y: 650, r: 64, s: 1.05 },
  { x: 98, y: 560, r: -66, s: 1.1 },
  { x: 58, y: 470, r: 58, s: 0.95 },
  { x: 104, y: 400, r: -72, s: 1.0 },
  { x: 70, y: 310, r: 66, s: 1.05 },
  // top cluster
  { x: 112, y: 210, r: -60, s: 1.0 },
  { x: 60, y: 140, r: 74, s: 1.15 },
  { x: 118, y: 90, r: -40, s: 1.05 },
  { x: 40, y: 30, r: 150, s: 1.1 },
  { x: 120, y: 10, r: 200, s: 0.95 },
];

// Back vine: lighter and thinner, fills the gaps so the border looks lush.
const backLeaves: L[] = [
  { x: 150, y: 820, r: -30, s: 0.8 },
  { x: 20, y: 690, r: 100, s: 0.85 },
  { x: 140, y: 620, r: -95, s: 0.75 },
  { x: 14, y: 520, r: 96, s: 0.9 },
  { x: 140, y: 470, r: -100, s: 0.7 },
  { x: 20, y: 380, r: 110, s: 0.85 },
  { x: 150, y: 300, r: -88, s: 0.75 },
  { x: 10, y: 230, r: 90, s: 0.9 },
  { x: 160, y: 160, r: -70, s: 0.7 },
];

/** A hand-drawn betel vine for the side borders. */
const VineBorder = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 220 900"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMinYMid slice"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    {/* Back layer */}
    <g opacity={0.45} strokeWidth={1.1}>
      <path d="M30 900 C10 780 60 700 30 600 C0 500 50 420 24 320 C0 220 40 140 30 0" />
      <Leaves items={backLeaves} />
    </g>
    {/* Front layer */}
    <path d="M70 900 C40 800 120 740 80 640 C40 540 130 480 90 380 C50 280 140 220 100 120 C80 70 90 30 110 0" strokeWidth={2} />
    {/* Tendrils */}
    <path d="M86 610 C110 600 126 584 120 566 C116 554 102 556 104 568" />
    <path d="M96 350 C70 336 58 316 66 300 C72 290 86 294 82 306" />
    <path d="M104 150 C130 142 146 124 138 108 C132 98 118 102 122 114" />
    <path d="M78 720 C58 712 48 696 54 684 C58 676 68 680 64 688" />
    <Leaves items={frontLeaves} />
  </svg>
);

/** Ornamental divider: a rule with diamond ends, flourishes and a betel leaf at the centre. */
const LeafDivider = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 640 120"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Rule */}
    <path d="M28 60 H262" />
    <path d="M378 60 H612" />
    {/* Diamond ends */}
    <path d="M10 60 L24 52 L38 60 L24 68 Z" />
    <path d="M602 60 L616 52 L630 60 L616 68 Z" />
    {/* Flourishes */}
    <path d="M262 60 C244 60 230 48 236 38 C242 28 256 34 250 44" />
    <path d="M200 60 C214 72 236 74 248 66" />
    <path d="M378 60 C396 60 410 48 404 38 C398 28 384 34 390 44" />
    <path d="M440 60 C426 72 404 74 392 66" />
    {/* Small side leaves */}
    <g transform="translate(286 66) rotate(-118) scale(0.34)"><LeafPaths /></g>
    <g transform="translate(354 66) rotate(118) scale(0.34)"><LeafPaths /></g>
    {/* Centre leaf, base up, tip down */}
    <g transform="translate(320 18) scale(0.82)" strokeWidth={2.4}><LeafPaths /></g>
  </svg>
);

const BrandStatementSection = () => (
  <section className="relative overflow-hidden bg-[#FBF8F1] py-20 md:py-28" aria-labelledby="brand-statement-title">
    {/* Side borders — line art in a soft leaf green, hidden on small phones where they would crowd the text */}
    <VineBorder className="hidden sm:block absolute left-0 top-0 h-full w-32 md:w-44 lg:w-60 text-[#8A9A8C]" />
    <VineBorder className="hidden sm:block absolute right-0 top-0 h-full w-32 md:w-44 lg:w-60 text-[#8A9A8C]" flip />

    <div className="container relative">
      <div className="mx-auto max-w-4xl text-center px-2 sm:px-16 md:px-20">
        <LeafDivider className="mx-auto mb-6 md:mb-8 h-14 sm:h-16 md:h-20 w-auto max-w-full text-primary" />

        <h2
          id="brand-statement-title"
          className="font-script text-[34px] leading-[1.25] sm:text-5xl md:text-6xl lg:text-[64px] text-primary mb-7 md:mb-9"
        >
          Love Tradition, Love Freshness, Love Vetrilai
        </h2>

        <p className="font-book text-lg md:text-[22px] leading-[1.75] text-foreground/85 max-w-3xl mx-auto">
          Every leaf is hand-picked from our 3rd-generation betel farms in Sholavandan. The unique fertile soil of the
          Vaigai river basin gives our leaves their distinct taste, aroma, and texture — harvested fresh every morning,
          with no middlemen and no cold storage, from our garden to your thamboolam.
        </p>

        <p className="tamil-text mt-6 text-lg md:text-xl font-semibold text-gold-ink" lang="ta">
          "வெற்றிலையில் சோழவந்தான் – தரத்தில் முதன்மை"
        </p>
      </div>
    </div>
  </section>
);

export default BrandStatementSection;

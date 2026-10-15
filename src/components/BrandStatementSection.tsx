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
 * A betel leaf drawn for the side vines: heart-shaped base with two rounded
 * lobes, a gently curved drip tip, and the arched veins that run from the base
 * towards the tip (the betel leaf's signature). Base at (0,0), leaf along +y.
 */
const VineLeaf = () => (
  <>
    <path
      d="M0 0 C-7 -11 -29 -14 -40 2 C-51 20 -44 50 -27 74 C-15 91 -4 104 7 120 C5 104 11 90 23 74 C41 50 49 21 39 3 C29 -13 8 -11 0 0 Z"
      fill="url(#vine-leaf-fill)"
    />
    {/* Midrib, following the curve to the tip */}
    <path d="M0 0 C2 40 4 80 7 118" strokeWidth={1.1} />
    {/* Arched primary veins from the base */}
    <g strokeWidth={0.8} opacity={0.75}>
      <path d="M0 2 C-13 20 -22 50 -16 88" />
      <path d="M0 2 C13 20 23 50 19 86" />
      <path d="M0 2 C-23 12 -35 32 -33 56" />
      <path d="M0 2 C23 12 36 31 35 54" />
      {/* Fine cross veins */}
      <path d="M-16 40 C-22 46 -27 52 -30 60" />
      <path d="M17 40 C23 46 28 52 31 59" />
      <path d="M-11 64 C-15 70 -18 76 -20 82" />
      <path d="M13 64 C17 70 20 76 22 81" />
    </g>
  </>
);

// Nodes along the vine, bottom to top. Each node carries one leaf on a short stalk.
// side: 1 = into the page (larger leaves), -1 = towards the edge (smaller, steeper).
const vineNodes = [
  { x: 44, y: 868, side: 1, a: -58, s: 0.95 },
  { x: 58, y: 772, side: -1, a: 22, s: 0.62 },
  { x: 46, y: 676, side: 1, a: -68, s: 1.05 },
  { x: 64, y: 578, side: -1, a: 18, s: 0.58 },
  { x: 50, y: 482, side: 1, a: -54, s: 0.92 },
  { x: 66, y: 386, side: 1, a: -80, s: 0.7 },
  { x: 52, y: 290, side: -1, a: 24, s: 0.64 },
  { x: 62, y: 196, side: 1, a: -62, s: 1 },
  { x: 54, y: 100, side: -1, a: 20, s: 0.56 },
  { x: 60, y: 28, side: 1, a: -50, s: 0.78 },
];

/** A climbing betel vine for the side borders. */
const VineBorder = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 240 900"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMinYMid slice"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="vine-leaf-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    {/* Main stem, gently swaying through the nodes */}
    <path
      d="M40 900 C48 880 40 872 44 868 C50 830 60 800 58 772 C56 740 42 708 46 676 C50 640 66 610 64 578 C62 546 46 514 50 482 C54 450 68 418 66 386 C64 354 50 322 52 290 C54 258 64 228 62 196 C60 164 52 132 54 100 C56 70 62 50 60 28 C59 16 62 6 66 0"
      strokeWidth={2.2}
    />
    {/* A second, thinner runner for depth */}
    <path d="M58 772 C78 760 92 742 90 720 C88 702 74 700 76 714" strokeWidth={1} opacity={0.7} />
    <path d="M52 290 C76 276 88 256 84 238 C80 226 68 228 72 240" strokeWidth={1} opacity={0.7} />

    {vineNodes.map((n, i) => {
      // Leaf stalk: a short curve from the node, then the leaf hangs from its tip
      const rad = (n.a * Math.PI) / 180;
      const len = 16 * (0.8 + n.s * 0.3);
      const px = n.x + Math.sin(-rad) * len;
      const py = n.y + Math.cos(rad) * len * 0.4 - 4;
      return (
        <g key={i}>
          {/* Node swelling and a couple of short aerial roots, as on a real betel vine */}
          <circle cx={n.x} cy={n.y} r={2.2} fill="currentColor" stroke="none" opacity={0.6} />
          <path d={`M${n.x} ${n.y} c-3 6 -5 10 -9 13 M${n.x} ${n.y} c-1 7 -1 11 -3 15`} strokeWidth={0.7} opacity={0.5} />
          <path d={`M${n.x} ${n.y} Q${(n.x + px) / 2} ${n.y - 8} ${px} ${py}`} strokeWidth={1.2} />
          <g transform={`translate(${px} ${py}) rotate(${n.a}) scale(${n.s})`}>
            <VineLeaf />
          </g>
        </g>
      );
    })}
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
    <VineBorder className="hidden sm:block absolute left-0 top-0 h-full w-28 md:w-40 lg:w-52 text-[#7E9C80]/80" />
    <VineBorder className="hidden sm:block absolute right-0 top-0 h-full w-28 md:w-40 lg:w-52 text-[#7E9C80]/80" flip />

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

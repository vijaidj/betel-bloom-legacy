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
 * Abstract betel leaf: the heart shape reduced to an outline and a centre
 * line. "f" leaves are softly tinted.
 * Base at (0,0), leaf along +y.
 */
const AbstractLeaf = ({ k }: { k: string }) => (
    <>
      <path
        d="M0 0 C-7 -11 -29 -14 -40 2 C-51 20 -44 50 -27 74 C-15 91 -4 104 7 120 C5 104 11 90 23 74 C41 50 49 21 39 3 C29 -13 8 -11 0 0 Z"
        fill={k === "f" ? "currentColor" : "none"}
        fillOpacity={k === "f" ? 0.14 : 0}
      />
      <path d="M0 4 C2 40 4 80 7 112" />
    </>
  );

// Small leaves along three loose, flowing lines (generated once, kept fixed)
const abstractLeaves = [
  { x: 55.7, y: 870.0, r: -31, s: 0.39, k: "o" },
  { x: 62.0, y: 810.0, r: 403, s: 0.38, k: "o" },
  { x: 50.0, y: 750.0, r: 302, s: 0.38, k: "o" },
  { x: 38.0, y: 690.0, r: 411, s: 0.32, k: "o" },
  { x: 44.3, y: 630.0, r: -21, s: 0.43, k: "o" },
  { x: 75.4, y: 570.0, r: 58, s: 0.46, k: "o" },
  { x: 79.5, y: 510.0, r: 298, s: 0.4, k: "f" },
  { x: 63.8, y: 450.0, r: 382, s: 0.38, k: "f" },
  { x: 46.8, y: 390.0, r: 306, s: 0.34, k: "f" },
  { x: 47.3, y: 330.0, r: 65, s: 0.37, k: "o" },
  { x: 73.0, y: 270.0, r: -36, s: 0.4, k: "o" },
  { x: 75.1, y: 210.0, r: 404, s: 0.37, k: "f" },
  { x: 60.0, y: 150.0, r: 283, s: 0.46, k: "o" },
  { x: 44.9, y: 90.0, r: 406, s: 0.35, k: "f" },
  { x: 47.0, y: 30.0, r: -29, s: 0.31, k: "o" },
  { x: 101.9, y: 870.0, r: 294, s: 0.32, k: "f" },
  { x: 93.6, y: 810.0, r: 62, s: 0.33, k: "o" },
  { x: 106.2, y: 750.0, r: -34, s: 0.33, k: "o" },
  { x: 120.1, y: 690.0, r: 49, s: 0.4, k: "f" },
  { x: 115.4, y: 630.0, r: 291, s: 0.33, k: "f" },
  { x: 84.9, y: 570.0, r: 403, s: 0.43, k: "o" },
  { x: 82.6, y: 510.0, r: -46, s: 0.33, k: "o" },
  { x: 101.2, y: 450.0, r: 78, s: 0.4, k: "f" },
  { x: 121.1, y: 390.0, r: -48, s: 0.33, k: "f" },
  { x: 122.4, y: 330.0, r: 400, s: 0.35, k: "f" },
  { x: 94.3, y: 270.0, r: 300, s: 0.31, k: "o" },
  { x: 88.6, y: 210.0, r: 52, s: 0.4, k: "o" },
  { x: 102.5, y: 150.0, r: -32, s: 0.45, k: "o" },
  { x: 118.8, y: 90.0, r: 62, s: 0.44, k: "f" },
  { x: 120.3, y: 30.0, r: 304, s: 0.45, k: "o" },
  { x: 191.6, y: 855.0, r: 318, s: 0.24, k: "o" },
  { x: 178.9, y: 765.0, r: 405, s: 0.28, k: "f" },
  { x: 166.0, y: 675.0, r: -57, s: 0.24, k: "f" },
  { x: 189.4, y: 585.0, r: 58, s: 0.26, k: "f" },
  { x: 190.0, y: 495.0, r: 307, s: 0.26, k: "o" },
  { x: 174.8, y: 405.0, r: 397, s: 0.26, k: "o" },
  { x: 183.4, y: 315.0, r: -38, s: 0.29, k: "o" },
  { x: 197.0, y: 225.0, r: 407, s: 0.23, k: "f" },
  { x: 182.9, y: 135.0, r: 310, s: 0.31, k: "o" },
  { x: 175.6, y: 45.0, r: 65, s: 0.22, k: "o" }
];
const abstractDots: [number, number, number][] = [
  [96.4, 537.8, 2.7],
  [34.3, 132.8, 2.7],
  [93.3, 475.4, 1.7],
  [58.7, 329.8, 1.7],
  [80.0, 604.8, 1.7],
  [107.7, 679.3, 2.7],
  [133.3, 729.2, 2.3],
  [63.5, 513.3, 2.8],
  [129.6, 681.5, 2.6],
  [116.0, 358.0, 2.5],
  [195.0, 463.1, 2.8],
  [192.7, 836.1, 2.7],
  [206.5, 241.3, 2.7],
  [198.0, 589.8, 2.6],
  [206.3, 530.4, 2.3]
];

/** Abstract border of small betel leaves on flowing lines. */
const VineBorder = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 220 900"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMinYMid slice"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    <g strokeWidth={1}>
      <path d="M40 900 C110 800 -10 700 60 600 C130 500 0 400 60 300 C120 200 0 100 60 0" strokeWidth={1.3} opacity={0.9} />
      <path d="M120 900 C40 800 170 700 100 600 C30 500 170 400 110 300 C40 200 160 100 110 0" strokeWidth={1.3} opacity={0.9} />
      <path d="M185 900 C215 800 130 700 185 600 C220 500 140 400 190 300 C220 200 150 100 185 0" strokeWidth={0.9} opacity={0.55} />
    </g>
    {abstractLeaves.map((l, i) => (
      <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
        <AbstractLeaf k={l.k} />
      </g>
    ))}
    {abstractDots.map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="currentColor" stroke="none" opacity={0.5} />
    ))}
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

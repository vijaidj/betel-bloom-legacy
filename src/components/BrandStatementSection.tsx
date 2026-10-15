/**
 * Brand statement in a hand-drawn style: line-art betel leaf borders, an
 * ornamental divider with a betel leaf at its centre, a script heading and
 * a book-serif paragraph. All artwork is inline SVG drawn for this page.
 */

/** One heart-shaped betel leaf with midrib and curved veins; base at (0,0), tip pointing down. */
export const LeafPaths = () => (
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

/** A climbing vine of betel leaves for the side borders. */
export const VineBorder = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 220 900"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMidYMid slice"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    {/* Main climbing stem */}
    <path d="M70 900 C40 800 120 740 80 640 C40 540 130 480 90 380 C50 280 140 220 100 120 C80 70 90 30 110 0" strokeWidth={2} />
    {/* Tendrils */}
    <path d="M86 610 C110 600 126 584 120 566 C116 554 102 556 104 568" />
    <path d="M96 350 C70 336 58 316 66 300 C72 290 86 294 82 306" />
    <path d="M104 150 C130 142 146 124 138 108 C132 98 118 102 122 114" />
    {/* Leaves along the stem */}
    <Leaf x={66} y={840} r={58} s={1.05} />
    <Leaf x={92} y={760} r={-62} s={0.95} />
    <Leaf x={64} y={680} r={70} s={1.1} />
    <Leaf x={96} y={560} r={-55} s={1} />
    <Leaf x={70} y={470} r={62} s={0.9} />
    <Leaf x={100} y={410} r={-70} s={1.15} />
    <Leaf x={78} y={300} r={55} s={1} />
    <Leaf x={112} y={220} r={-60} s={0.9} />
    <Leaf x={92} y={130} r={66} s={1.05} />
    <Leaf x={108} y={40} r={-48} s={0.85} />
  </svg>
);

/** Ornamental divider: a rule with diamond ends, flourishes and a betel leaf at the centre. */
export const LeafDivider = ({ className = "" }: { className?: string }) => (
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
    <VineBorder className="hidden sm:block absolute left-0 top-0 h-full w-28 md:w-40 lg:w-52 text-[#8FA88F]/60" />
    <VineBorder className="hidden sm:block absolute right-0 top-0 h-full w-28 md:w-40 lg:w-52 text-[#8FA88F]/60" flip />

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

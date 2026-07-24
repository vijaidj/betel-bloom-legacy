import freshLeafImg from "@/assets/product-fresh-leaf.webp";
import powderImg from "@/assets/product-powder.webp";
import powder50Img from "@/assets/product-powder-50g.webp";
import powder50Zoom from "@/assets/product-powder-50g-zoom.webp";
import teaImg from "@/assets/product-tea.webp";
import oilImg from "@/assets/product-oil.webp";
import juiceMixImg from "@/assets/product-juice-mix.webp";
import waterImg from "@/assets/product-water.webp";
import type { Product } from "./types";
import { defaultJourney, baseSpecs } from "./journey";

export type { Product, Variant, Benefit, Faq, Freshness, JourneyStep, Specs } from "./types";
export { defaultJourney } from "./journey";

export const SITE_URL = "https://www.vetrileaf.com";
export const WHATSAPP_NUMBER = "919600441284";
export const FSSAI_LICENCE = "22424000000455";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const products: Product[] = [
  {
    slug: "fresh-betel-leaf",
    name: "Fresh Betel Leaf",
    tagline: "Farm to Door",
    summary: "GI-certified Sholavandan betel leaves, hand-picked at dawn and dispatched the same day.",
    cardDescription:
      "Hand-picked at dawn from our heritage farms along the Vaigai river basin. GI-certified Sholavandan vetrilai — the standard for weddings, thamboolam, puja and daily rituals.",
    description: [
      "Sholavandan betel leaf carries a Geographical Indication tag from the Government of India, which means the name is legally protected and can only be used for leaves grown in this specific region of Madurai district. That protection exists because the leaf here is genuinely different — the alluvial soil of the Vaigai river basin, the mineral content of the groundwater, and the local microclimate together produce a leaf with a softer texture, a deeper aroma and a milder bite than betel grown elsewhere in Tamil Nadu.",
      "Our vines are cultivated the way three generations of our family have cultivated them: grown on live support trees, irrigated from the river basin, and harvested by hand in the early morning while the leaves still hold the night's moisture. We do not use chemical ripeners, we do not cold-store, and we do not buy from intermediaries. Every leaf we ship was picked from our own fields.",
      "Orders are graded, bundled and packed on the morning of harvest, then dispatched the same day. For Madurai and the surrounding districts, leaves reach you within hours of leaving the vine. For the rest of India, they travel in moisture-locked packaging designed to hold freshness for the length of the journey.",
    ],
    image: freshLeafImg,
    imageAlt: "Fresh Sholavandan betel leaves in a traditional bamboo basket",
    benefits: [
      { title: "Ceremonial significance", detail: "Central to thamboolam, wedding rituals, temple offerings and traditional Tamil hospitality." },
      { title: "Naturally aromatic", detail: "The Vaigai basin soil produces a distinctive fragrance that holds through the day." },
      { title: "Softer texture", detail: "Thinner and more pliable than most varieties, which is why it is preferred for paan." },
      { title: "Traditionally used as a digestive", detail: "Chewed after meals across South India for generations." },
    ],
    howToUse: [
      "For thamboolam, pair with areca nut and a coin or small gift as tradition dictates.",
      "For puja, select unbroken leaves with the stem intact.",
      "For paan, apply slaked lime sparingly and fold in the traditional cone.",
      "Rinse in cool water and pat dry before use.",
    ],
    storage:
      "Wrap the bundle in a damp cotton cloth and keep in the vegetable compartment of your refrigerator. Do not seal in plastic — the leaves need to breathe. Sprinkle lightly with water each day. Stored this way, leaves stay fresh for five to seven days.",
    shelfLife: "5–7 days refrigerated; best used within 3 days",
    ingredients: "100% fresh betel leaf (Piper betle). Nothing added.",
    netWeight: "Sold by leaf count — 100, 500, 1000 or bulk",
    minimumOrder: "100 leaves",
    leadTime: "Same-day dispatch for orders confirmed before 10 AM",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "None — sold fresh, unwashed and ungraded by machine",
      packageMaterial: "Moisture-locked food-grade wrap, banana fibre tie",
      suitableFor: "Weddings, thamboolam, temple puja, paan, daily use",
    },
    freshness: {
      kind: "fresh",
      harvest: "Harvested the morning your order is packed",
      dispatch: "Dispatched same day for orders confirmed before 10 AM",
      guarantee: "Arrives fresh or we replace it — send a photo within 24 hours",
      peakMonths: "Quality peaks October to March",
    },
    trustBadges: ["GI certified", "Harvested today", "Farm direct"],
    journey: defaultJourney,
    compareRows: ["Price", "Leaf size", "Colour", "Thickness", "Best use", "Shelf life", "Occasion"],
    variants: [
      {
        id: "nadu",
        label: "Nadu Vetrilai",
        sublabel: "Premium grade",
        note: "Best for weddings and temple offerings",
        sku: "VL-FRESH-NADU",
        availability: "InStock",
        recommended: true,
        badge: "Most ordered",
        giCovered: true,
        price: 5,
        priceUnit: "per leaf",
        summary:
          "The premium Sholavandan grade — larger, hand-selected leaves reserved for ceremony.",
        whyThis: [
          "Larger leaves hold their shape through a full day of ceremony",
          "Hand-selected, so every leaf in the bundle is presentation quality",
          "The grade traditionally used for thamboolam and temple offerings",
        ],
        compare: {
          Price: "₹5 per leaf",
          "Leaf size": "Large, 12–15 cm",
          Colour: "Deep even green",
          Thickness: "Medium, pliable",
          "Best use": "Thamboolam, temple, gifting",
          "Shelf life": "5–7 days refrigerated",
          Occasion: "Weddings, festivals, puja",
        },
      },
      {
        id: "sirugamani",
        label: "Sirugamani Vetrilai",
        sublabel: "Traditional variety",
        note: "Everyday use, smaller leaf",
        sku: "VL-FRESH-SIRU",
        availability: "InStock",
        // ⚠ Set to true ONLY if this variety is grown on our own Sholavandan
        // land. Sirugamani is in Tiruchirappalli district; the GI registration
        // covers the Sholavandan production area in Madurai district. While
        // false, the GI badge and origin schema are suppressed for this variant.
        giCovered: false,
        price: 4,
        priceUnit: "per leaf",
        summary:
          "The smaller traditional leaf — the one most Tamil households grew up with.",
        whyThis: [
          "Smaller leaf, easier to fold for everyday paan",
          "The variety most Tamil households grew up with",
          "More economical for regular and repeat use",
        ],
        compare: {
          Price: "₹4 per leaf",
          "Leaf size": "Small, 7–9 cm",
          Colour: "Lighter green",
          Thickness: "Thinner",
          "Best use": "Daily paan, home use",
          "Shelf life": "4–6 days refrigerated",
          Occasion: "Everyday",
        },
      },
    ],
    boughtWith: ["betel-leaf-powder", "betel-leaf-tea"],
    seo: {
      title: "Buy Fresh Sholavandan Betel Leaf Online | GI Certified Vetrilai",
      description:
        "GI-certified fresh Sholavandan betel leaf, hand-picked at dawn with same-day dispatch. For weddings, thamboolam and temple puja.",
      keywords: "fresh betel leaf online, sholavandan vetrilai, GI certified betel leaf, buy vetrilai, wedding betel leaf, thamboolam vetrilai",
    },
    faqs: [
      { q: "How many betel leaves do I need for a wedding?", a: "As a working figure, allow three to five leaves per guest for thamboolam. For 100 guests that is 300 to 500 leaves. Send us your guest count on WhatsApp and we will give you a precise recommendation based on the type of function." },
      { q: "How long do fresh betel leaves stay good?", a: "Wrapped in a damp cloth and refrigerated, five to seven days. For a function, we recommend ordering so the leaves arrive one to two days before, not earlier." },
      { q: "What makes Sholavandan betel leaf different?", a: "The soil and water of the Vaigai river basin. The leaf is softer, more aromatic and milder than betel grown elsewhere, which is why the region holds a Geographical Indication tag." },
      { q: "Do you deliver outside Tamil Nadu?", a: "Yes. We ship across India in moisture-locked packaging. Tamil Nadu takes one to two days, the rest of India two to four days." },
      { q: "What if the leaves arrive in poor condition?", a: "Send us a photograph on WhatsApp within 24 hours of delivery and we will replace the order. Fresh produce travels, and we stand behind what we ship." },
    ],
    related: ["betel-leaf-powder", "betel-leaf-tea", "betel-leaf-water"],
  },
  {
    slug: "betel-leaf-powder",
    name: "Betel Leaf Powder",
    tagline: "100% Natural",
    summary: "Sun-dried Sholavandan betel leaves, stone-ground to a fine powder with nothing added.",
    cardDescription:
      "Stone-ground from sun-dried Sholavandan betel leaves. A single-ingredient powder for herbal preparations, traditional formulations and daily wellness routines.",
    description: [
      "This is one ingredient and nothing else: GI-certified Sholavandan betel leaf, sun-dried and stone-ground. No fillers, no binding agents, no preservatives, no artificial colour. When you open the jar, the aroma is the same one you get from crushing a fresh leaf, because that is all that is in it.",
      "The leaves are harvested from our own farms, washed, and dried in shade and filtered sunlight rather than mechanically heat-dried. Heat drying is faster and cheaper, but it strips the volatile compounds that carry the aroma and much of the character of the leaf. Shade drying takes days instead of hours and preserves both.",
      "Grinding is done on stone rather than in a high-speed mill, again for temperature. Stone grinding keeps the powder cool, which protects the aromatic oils. The result is a fine, deep-green powder that keeps its fragrance for the full twelve months of its shelf life.",
    ],
    image: powderImg,
    imageAlt: "VetriLeaf premium betel leaf powder in a 100 gram jar",
    benefits: [
      { title: "Single ingredient", detail: "Betel leaf and nothing else — no fillers, binders or preservatives." },
      { title: "Shade dried", detail: "Preserves the aromatic compounds that heat drying destroys." },
      { title: "Stone ground", detail: "Low-temperature grinding protects the natural oils." },
      { title: "Long shelf life", detail: "Twelve months sealed, with no loss of aroma." },
    ],
    howToUse: [
      "Stir half a teaspoon into warm water and let it stand for two minutes.",
      "Add to herbal preparations and traditional formulations as your recipe requires.",
      "Blend into smoothies or buttermilk for a mild herbal note.",
      "Combine with honey or warm water as a traditional home remedy.",
    ],
    storage:
      "Keep the jar tightly closed in a cool, dry place away from direct sunlight. Use a dry spoon each time — moisture entering the jar will cause clumping and shorten the shelf life.",
    shelfLife: "12 months from packing date, unopened",
    ingredients: "100% sun-dried Sholavandan betel leaf powder (Piper betle).",
    netWeight: "100 g",
    minimumOrder: "1 jar retail; 50 jars wholesale",
    leadTime: "1–2 working days",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "Shade dried, then stone ground at low temperature",
      packageMaterial: "Food-grade PET jar, tamper-evident seal",
      suitableFor: "Herbal preparations, Ayurvedic formulations, daily wellness",
    },
    freshness: {
      kind: "packaged",
      packedNote: "Packing date printed on every jar",
      bestBefore: "Best within 12 months of packing",
      naturalNote: "Single ingredient — betel leaf only",
      preservativeNote: "No preservatives, fillers or anti-caking agents",
    },
    trustBadges: ["GI certified", "Single ingredient", "No preservatives"],
    journey: defaultJourney,
    compareRows: ["Net weight", "Servings", "Best for", "Value", "Shelf life"],
    variants: [
      {
        id: "50g",
        label: "50 g",
        sublabel: "Trial jar",
        note: "Ideal for first-time buyers",
        sku: "VL-POWDER-50",
        availability: "InStock",
        giCovered: true,
        image: powder50Img,
        zoomImage: powder50Zoom,
        imageAlt: "VetriLeaf betel leaf powder, 50 gram resealable pouch",
        netWeight: "50 g",
        minimumOrder: "1 jar retail; 100 jars wholesale",
        whyThis: [
          "Enough for about a month of daily use",
          "The sensible way to try it before committing",
          "Same leaf, same grind, smaller jar",
        ],
        compare: {
          "Net weight": "50 g",
          Servings: "~100 at ½ tsp",
          "Best for": "Trying it first",
          Value: "Standard",
          "Shelf life": "12 months unopened",
        },
      },
      {
        id: "100g",
        label: "100 g",
        sublabel: "Family jar",
        note: "Better value for regular use",
        sku: "VL-POWDER-100",
        availability: "InStock",
        recommended: true,
        badge: "Best value",
        giCovered: true,
        image: powderImg,
        imageAlt: "VetriLeaf betel leaf powder, 100 gram jar",
        netWeight: "100 g",
        minimumOrder: "1 jar retail; 50 jars wholesale",
        whyThis: [
          "Roughly two months of daily use for one household",
          "Lower cost per gram than the trial jar",
          "The size most repeat customers settle on",
        ],
        compare: {
          "Net weight": "100 g",
          Servings: "~200 at ½ tsp",
          "Best for": "Regular use",
          Value: "Better per gram",
          "Shelf life": "12 months unopened",
        },
      },
    ],
    boughtWith: ["betel-leaf-tea", "fresh-betel-leaf"],
    seo: {
      title: "Betel Leaf Powder 100g | Pure Sholavandan Vetrilai Powder Online",
      description:
        "Natural betel leaf powder from sun-dried GI-certified Sholavandan leaves. Stone-ground, single ingredient, no preservatives. 100g.",
      keywords: "betel leaf powder, vetrilai powder, sholavandan betel powder, natural betel leaf powder, betel powder online",
    },
    faqs: [
      { q: "What is in this besides betel leaf?", a: "Nothing. It is a single-ingredient product — sun-dried Sholavandan betel leaf, ground. No fillers, preservatives, colours or anti-caking agents." },
      { q: "How much powder equals one fresh leaf?", a: "Roughly half a teaspoon of powder is comparable to one medium fresh leaf, though the texture and the way it releases aroma are different." },
      { q: "How long does it keep?", a: "Twelve months from the packing date if the jar stays sealed and dry. The packing date is printed on every jar." },
      { q: "Is it safe to consume daily?", a: "It is a traditional food ingredient used across South India. As with any herbal product, if you are pregnant, nursing or on medication, speak to your doctor first." },
      { q: "Why is the colour green rather than brown?", a: "Because it is shade dried rather than heat dried. Heat drying turns betel leaf brown and takes most of the aroma with it." },
    ],
    related: ["betel-leaf-tea", "betel-juice-mix", "fresh-betel-leaf"],
  },
  {
    slug: "betel-leaf-tea",
    name: "Betel Leaf Tea",
    tagline: "Ready to Brew",
    summary: "Caffeine-free betel leaf tea bags. Twenty bags, one ingredient, three minutes to brew.",
    cardDescription:
      "Convenient herbal tea made from pure Sholavandan betel leaf. Caffeine free, no artificial flavours, ready in three minutes.",
    description: [
      "Betel leaf has been taken as an infusion in Tamil households for generations, usually by tearing a fresh leaf into hot water. This is the same thing, made convenient. Each bag holds two grams of pure Sholavandan betel leaf — no blending agents, no added flavouring, no colour, and no caffeine.",
      "The taste is worth setting expectations on. It is not sweet and it is not floral. It is clean and faintly peppery with a cooling finish, closer to a light green tea than to a herbal fruit infusion. Most people take it without milk. A little honey suits it well if you prefer something softer.",
      "Because it is caffeine free, it works as an evening drink where regular tea would not. It is the easiest way into betel leaf for anyone who has not grown up with the fresh leaf.",
    ],
    image: teaImg,
    imageAlt: "VetriLeaf betel leaf tea bags, box of 20",
    benefits: [
      { title: "Caffeine free", detail: "Suitable for evenings and for anyone reducing caffeine." },
      { title: "No artificial flavours", detail: "Pure betel leaf — no blending agents, colours or added flavouring." },
      { title: "Ready in three minutes", detail: "No preparation, no straining, no measuring." },
      { title: "Traditionally taken after meals", detail: "The customary time to drink it across South India." },
    ],
    howToUse: [
      "Place one tea bag in a cup and add 150 ml of hot water, just off the boil.",
      "Steep for three to five minutes depending on how strong you like it.",
      "Remove the bag and drink. Best without milk.",
      "Add honey or a slice of lemon if you prefer a softer flavour.",
    ],
    storage:
      "Store the box in a cool, dry place away from strong-smelling foods — tea bags absorb surrounding aromas. Keep the inner wrapper closed once opened.",
    shelfLife: "12 months from packing date",
    ingredients: "100% Sholavandan betel leaf (Piper betle). 20 bags × 2 g = 40 g net.",
    netWeight: "40 g — 20 tea bags",
    minimumOrder: "1 box retail; 50 boxes wholesale",
    leadTime: "1–2 working days",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "Shade dried, cut and filled into unbleached filter bags",
      packageMaterial: "Printed carton, inner foil wrapper. No plastic mesh or staples",
      suitableFor: "Daily infusion, evening drink, after meals",
    },
    freshness: {
      kind: "packaged",
      packedNote: "Packing date printed on every box",
      bestBefore: "Best within 12 months of packing",
      naturalNote: "100% betel leaf — no blending agents",
      preservativeNote: "No artificial flavours, colours or preservatives",
    },
    trustBadges: ["GI certified", "Caffeine free", "No artificial flavours"],
    journey: defaultJourney,
    boughtWith: ["betel-leaf-powder", "betel-leaf-water"],
    seo: {
      title: "Betel Leaf Tea Bags | Caffeine Free Herbal Vetrilai Tea, 20 Bags",
      description:
        "Buy VetriLeaf betel leaf tea — 20 caffeine-free bags of pure GI-certified Sholavandan betel leaf. No artificial flavours or colours. Brews in three minutes.",
      keywords: "betel leaf tea, vetrilai tea, herbal betel tea, caffeine free tea, betel tea bags online",
    },
    faqs: [
      { q: "What does betel leaf tea taste like?", a: "Clean and faintly peppery with a cooling finish — closer to a light green tea than a sweet herbal infusion. It is not sweet or floral on its own." },
      { q: "Does it contain caffeine?", a: "No. Betel leaf is naturally caffeine free, which is why it works as an evening drink." },
      { q: "Can I drink it with milk?", a: "You can, but we would not recommend it. The flavour is delicate and milk tends to flatten it. Honey is a better addition if you want it softer." },
      { q: "How many cups a day?", a: "One or two is typical. As with any herbal tea, moderation is sensible, and if you are pregnant, nursing or on medication, check with your doctor." },
      { q: "Are the tea bags biodegradable?", a: "The filter paper is unbleached and the bags contain no plastic mesh or staples." },
    ],
    related: ["betel-leaf-powder", "betel-leaf-water", "fresh-betel-leaf"],
  },
  {
    slug: "betel-leaf-oil",
    name: "Betel Leaf Oil",
    tagline: "Steam Distilled",
    summary: "Steam-distilled betel leaf oil for aromatherapy and traditional external use.",
    cardDescription:
      "Pure betel leaf oil, steam distilled from GI-certified Sholavandan leaves. For aromatherapy and traditional external application.",
    description: [
      "Betel leaf oil is produced by steam distillation, which passes steam through the leaf material and captures the volatile compounds as the vapour condenses. It is a slow process with a very low yield — it takes a large volume of fresh leaf to produce a small quantity of oil, which is why genuine betel leaf oil is not cheap.",
      "The alternative is solvent extraction, which is faster and produces more, but leaves residue and changes the character of the oil. We use steam distillation only. The result is a clear, pale oil with a sharp, green, peppery aroma that is unmistakably betel.",
      "This is a concentrated essential oil and should be treated as one. It is intended for aromatherapy and traditional external use, always diluted in a carrier oil. It is not for internal consumption.",
    ],
    image: oilImg,
    imageAlt: "Cold pressed VetriLeaf betel leaf oil in a glass dropper bottle",
    benefits: [
      { title: "Steam distilled", detail: "No solvents, no chemical extraction, no residue." },
      { title: "Single source", detail: "Distilled from our own GI-certified Sholavandan leaves." },
      { title: "Traditional external use", detail: "Long used in South Indian household practice, always diluted." },
      { title: "Aromatherapy", detail: "A sharp, green, peppery note used in diffuser blends." },
    ],
    howToUse: [
      "Always dilute before use — two to three drops in a tablespoon of carrier oil such as coconut or sesame.",
      "For aromatherapy, add three to four drops to a diffuser.",
      "Patch-test on a small area of skin and wait 24 hours before wider use.",
      "For external use only. Do not swallow.",
    ],
    storage:
      "Keep the bottle tightly capped in a cool, dark place. Essential oils degrade in light and heat, so keep it out of direct sunlight and away from the stove. The amber glass is part of the protection.",
    shelfLife: "24 months from packing date, stored correctly",
    ingredients: "100% steam-distilled betel leaf oil (Piper betle leaf oil).",
    netWeight: "30 ml",
    minimumOrder: "1 bottle retail; 25 bottles wholesale",
    leadTime: "1–2 working days",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "Steam distilled. No solvents, no chemical extraction",
      packageMaterial: "Amber glass bottle with glass dropper",
      suitableFor: "Aromatherapy and traditional external use, always diluted",
    },
    freshness: {
      kind: "packaged",
      packedNote: "Distillation batch printed on every bottle",
      bestBefore: "Best within 24 months, stored away from light and heat",
      naturalNote: "Single ingredient — betel leaf oil only",
      preservativeNote: "No carrier oils, diluents or synthetic additives",
    },
    trustBadges: ["GI certified", "Steam distilled", "External use only"],
    journey: defaultJourney,
    boughtWith: ["betel-leaf-powder", "fresh-betel-leaf"],
    seo: {
      title: "Betel Leaf Oil 30ml | Steam Distilled Pure Vetrilai Oil Online",
      description:
        "Buy pure steam-distilled betel leaf oil made from GI-certified Sholavandan leaves. No solvents or chemical extraction. 30ml amber glass bottle with dropper.",
      keywords: "betel leaf oil, vetrilai oil, betel essential oil, steam distilled betel oil, pure betel leaf oil",
    },
    faqs: [
      { q: "Can I apply it directly to skin?", a: "No. It is a concentrated essential oil and must be diluted in a carrier oil first — two to three drops per tablespoon. Always patch-test and wait 24 hours before wider use." },
      { q: "Can it be consumed?", a: "No. This is for external and aromatherapy use only. Do not swallow it." },
      { q: "Why is betel leaf oil expensive?", a: "Steam distillation has a very low yield. It takes a large quantity of fresh leaf to produce a small quantity of oil, and the process is slow." },
      { q: "What does it smell like?", a: "Sharp, green and peppery — the concentrated version of the aroma you get from crushing a fresh betel leaf." },
      { q: "Is it safe during pregnancy?", a: "We would advise against using any concentrated essential oil during pregnancy without speaking to your doctor first." },
    ],
    related: ["betel-leaf-powder", "fresh-betel-leaf", "betel-leaf-water"],
  },
  {
    slug: "betel-juice-mix",
    name: "Betel Juice Mix",
    tagline: "Refreshing & Energizing",
    summary: "A ready betel leaf juice concentrate with no artificial colours or flavours.",
    cardDescription:
      "A betel leaf juice concentrate made from fresh Sholavandan leaves. Mix with water or coconut water for a refreshing herbal drink.",
    description: [
      "This is the traditional betel leaf juice preparation, made ready. In Tamil households the drink is made by grinding fresh leaves with water and straining, which is simple enough but only practical if you have fresh leaves to hand and time to make it. The concentrate gives you the same drink in the time it takes to stir.",
      "It is made from fresh Sholavandan leaves processed within hours of harvest, with no artificial colours, no artificial flavours and no synthetic preservatives. The pale green colour comes from the leaf itself, which is also why it varies slightly between batches — leaves harvested in different months differ in colour, and we do not correct for that.",
      "The taste is fresh and mildly peppery with a cooling finish. It works well with plain water, and particularly well with coconut water or a squeeze of lime.",
    ],
    image: juiceMixImg,
    imageAlt: "VetriLeaf betel leaf juice mix, natural herbal detox drink",
    benefits: [
      { title: "No artificial additives", detail: "No synthetic colours, flavours or preservatives." },
      { title: "Ready in seconds", detail: "The traditional preparation without the grinding and straining." },
      { title: "Traditionally cooling", detail: "Taken through the Tamil Nadu summer for generations." },
      { title: "Mixes easily", detail: "Works with water, coconut water or buttermilk." },
    ],
    howToUse: [
      "Add 30 ml of concentrate to 200 ml of chilled water and stir.",
      "For a richer version, use coconut water instead of plain water.",
      "Add a squeeze of lime or a little honey to taste.",
      "Shake the bottle before pouring — natural settling is expected.",
    ],
    storage:
      "Refrigerate after opening and use within seven days. Keep the cap tightly closed. Some settling and slight colour variation between batches is normal and is a consequence of having no stabilisers in the product.",
    shelfLife: "6 months sealed; 7 days refrigerated after opening",
    ingredients: "Sholavandan betel leaf extract, water, natural acidity regulator. No artificial colours or flavours.",
    netWeight: "500 ml",
    minimumOrder: "1 bottle retail; 24 bottles wholesale",
    leadTime: "1–2 working days",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "Cold processed within hours of harvest",
      packageMaterial: "Glass bottle, metal cap",
      suitableFor: "Daily drink, mixed with water or coconut water",
    },
    freshness: {
      kind: "packaged",
      packedNote: "Bottling date printed on every bottle",
      bestBefore: "6 months sealed; 7 days refrigerated once opened",
      naturalNote: "Made from fresh leaves, not concentrate powder",
      preservativeNote: "No artificial colours, flavours or synthetic preservatives",
    },
    trustBadges: ["GI certified", "No added sugar", "No artificial colour"],
    journey: defaultJourney,
    boughtWith: ["betel-leaf-water", "betel-leaf-tea"],
    seo: {
      title: "Betel Leaf Juice Mix 500ml | Natural Vetrilai Juice Concentrate",
      description:
        "Buy VetriLeaf betel leaf juice mix — a natural concentrate from GI-certified Sholavandan leaves. No artificial colours or flavours. 500ml bottle, mixes in seconds.",
      keywords: "betel juice, betel leaf juice, vetrilai juice, betel leaf drink, natural betel juice mix",
    },
    faqs: [
      { q: "How many servings in one bottle?", a: "About sixteen, at 30 ml of concentrate per serving." },
      { q: "Why does the colour vary between bottles?", a: "Because there are no artificial colours in it. Leaves harvested in different months vary in shade and we do not correct for that." },
      { q: "Does it need refrigeration before opening?", a: "No. Sealed, it keeps at room temperature for six months. Once opened, refrigerate and use within seven days." },
      { q: "Can children drink it?", a: "In small, diluted quantities it is a traditional household drink, but we would suggest checking with your paediatrician first." },
      { q: "Is there added sugar?", a: "No. If you want it sweeter, add honey to taste." },
    ],
    related: ["betel-leaf-water", "betel-leaf-tea", "betel-leaf-powder"],
  },
  {
    slug: "betel-leaf-water",
    name: "Betel Leaf Water",
    tagline: "Daily Detox",
    summary: "Lightly infused betel leaf water — a mild, ready-to-drink daily option.",
    cardDescription:
      "Water gently infused with fresh Sholavandan betel leaves. Light, mild and ready to drink — the easiest way to take betel leaf daily.",
    description: [
      "Betel leaf water is the gentlest product in our range. Fresh Sholavandan leaves are steeped in purified water and the infusion is bottled — no concentrate, no dilution required, nothing to prepare. It is meant to be drunk as it comes.",
      "The flavour is deliberately light. Where the juice mix is concentrated and the tea is brewed strong, this sits well below both: a clean, faintly herbal note with a cooling finish and no bitterness. If you have not tried betel leaf before, this is the easiest place to start.",
      "It contains no sugar, no artificial flavouring and no colour. Whole leaves are visible in the bottle because they are genuinely in there — the infusion continues gently for as long as they remain.",
    ],
    image: waterImg,
    imageAlt: "VetriLeaf betel leaf water bottle, farm direct infusion",
    benefits: [
      { title: "Ready to drink", detail: "No mixing, no brewing, no preparation of any kind." },
      { title: "No sugar", detail: "Unsweetened, with no artificial flavouring or colour." },
      { title: "Very mild", detail: "The gentlest introduction to betel leaf in our range." },
      { title: "Farm direct", detail: "Infused from leaves harvested on our own land." },
    ],
    howToUse: [
      "Chill and drink as it comes — no dilution needed.",
      "Traditionally taken in the morning or after meals.",
      "Add a slice of lime or a few mint leaves if you want more brightness.",
      "Shake gently before opening.",
    ],
    storage:
      "Store sealed in a cool place away from direct sunlight. Refrigerate after opening and finish within three days. The leaves remain in the bottle by design and the infusion strengthens slightly over time.",
    shelfLife: "6 months sealed; 3 days refrigerated after opening",
    ingredients: "Purified water, fresh Sholavandan betel leaf (Piper betle). Nothing else.",
    netWeight: "500 ml",
    minimumOrder: "1 bottle retail; 24 bottles wholesale",
    leadTime: "1–2 working days",
    specs: {
      ...baseSpecs,
      harvestMethod: "Hand-picked at dawn",
      processingMethod: "Whole leaves steeped in purified water, bottled with leaves in",
      packageMaterial: "Glass bottle, metal cap",
      suitableFor: "Ready to drink, daily hydration",
    },
    freshness: {
      kind: "packaged",
      packedNote: "Bottling date printed on every bottle",
      bestBefore: "6 months sealed; 3 days refrigerated once opened",
      naturalNote: "Whole leaves visible in the bottle — a genuine infusion",
      preservativeNote: "No sugar, no preservatives, no artificial flavouring",
    },
    trustBadges: ["GI certified", "Ready to drink", "No sugar added"],
    journey: defaultJourney,
    boughtWith: ["betel-juice-mix", "betel-leaf-tea"],
    seo: {
      title: "Betel Leaf Water 500ml | Natural Infused Vetrilai Water Online",
      description:
        "Buy VetriLeaf betel leaf water — purified water infused with fresh GI-certified Sholavandan leaves. No sugar, no artificial flavours. Ready to drink, 500ml.",
      keywords: "betel leaf water, vetrilai water, infused betel water, betel detox water, natural betel drink",
    },
    faqs: [
      { q: "How is this different from the juice mix?", a: "The juice mix is a concentrate you dilute yourself and it is much stronger. This is a ready-to-drink infusion and is considerably milder." },
      { q: "Why are there leaves in the bottle?", a: "Because it is a genuine infusion. The leaves stay in and the flavour continues to develop gently while they remain." },
      { q: "Is there sugar in it?", a: "No. It is completely unsweetened, with no artificial flavouring or colour." },
      { q: "How long after opening?", a: "Refrigerate and finish within three days. There are no preservatives holding it beyond that." },
      { q: "Can I drink it every day?", a: "It is a traditional daily drink in Tamil households. As with anything, if you are pregnant, nursing or on medication, check with your doctor." },
    ],
    related: ["betel-juice-mix", "betel-leaf-tea", "fresh-betel-leaf"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productSlugs = products.map((p) => p.slug);

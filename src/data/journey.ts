import type { JourneyStep, Specs } from "./types";

/**
 * The farm-to-customer journey. Shared by default because every product
 * follows the same path; a product may override via its `journey` field.
 */
export const defaultJourney: JourneyStep[] = [
  {
    icon: "sprout",
    title: "Our farm",
    detail: "Vines grown on live support trees along the Vaigai river basin, as three generations have done.",
  },
  {
    icon: "scissors",
    title: "Dawn harvest",
    detail: "Picked by hand in the early morning while the leaves still hold the night's moisture.",
  },
  {
    icon: "layers",
    title: "Sorting & grading",
    detail: "Every leaf checked by hand. Torn, spotted or undersized leaves never reach a bundle.",
  },
  {
    icon: "package",
    title: "Packing",
    detail: "Bundled and sealed in moisture-locked packaging on the morning of harvest.",
  },
  {
    icon: "truck",
    title: "Dispatch",
    detail: "Handed to the courier the same day. No warehouse, no cold storage, no waiting.",
  },
  {
    icon: "home",
    title: "Your door",
    detail: "Same day in Madurai, one to two days across Tamil Nadu, two to four days pan India.",
  },
];

/** Specification defaults shared by every product. */
export const baseSpecs: Pick<Specs, "origin" | "countryOfOrigin"> = {
  origin: "Sholavandan, Madurai District, Tamil Nadu",
  countryOfOrigin: "India",
};

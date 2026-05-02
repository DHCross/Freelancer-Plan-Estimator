export interface ProductInsight {
  targetWords: number;
  estimatedPages: { min: number; max: number };
  layoutHours: { min: number; mid: number; max: number };
}

const INSIGHTS: Record<string, ProductInsight> = {
  // Normalize key to lowercase for flexible matching
  "a0: caravan's end": {
    targetWords: 60000, // Between 55-65k, choose midpoint
    estimatedPages: { min: 75, max: 90 },
    layoutHours: { min: 45, mid: 50, max: 55 },
  },
};

export function getInsightsForProduct(name: string): ProductInsight | null {
  const key = name.trim().toLowerCase();
  if (INSIGHTS[key]) return INSIGHTS[key];
  // fuzzy: startsWith A0 or contains caravan
  if (key.startsWith("a0") || key.includes("caravan")) {
    return INSIGHTS["a0: caravan's end"]; // best-effort match
  }
  return null;
}

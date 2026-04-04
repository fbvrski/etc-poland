export type Project = {
  slug: string;
  title: string;
  type: string;
  typeSlug: string;
  year: string;
  location: string;
  gla: string;
  lat: number;
  lng: number;
  excerpt: string;
};

/** Map-only pins: listed on the map only; still have /projects/[slug] illustrative detail pages. */
export type MapOnlyProject = {
  slug: string;
  title: string;
  type: string;
  /** Used with getMapSampleTypeFilters() when portfolio is empty. */
  filterSlug: string;
  lat: number;
  lng: number;
  mapOnly: true;
  location: string;
  gla: string;
  year: string;
  excerpt: string;
};

/** Filter chips for illustrative map pins (no real PROJECTS yet). */
export function getMapSampleTypeFilters(): { slug: string; label: string }[] {
  return [
    { slug: "sample-parking", label: "Parking & access" },
    { slug: "sample-traffic", label: "Traffic & studies" },
    { slug: "sample-logistics", label: "Logistics & sites" },
  ];
}

export const MAP_ONLY_PROJECTS: MapOnlyProject[] = [
  {
    slug: "__map-sample-warsaw",
    title: "Retail-led scheme (illustrative)",
    type: "Parking & access — sample location",
    filterSlug: "sample-parking",
    lat: 52.2297,
    lng: 21.0122,
    mapOnly: true,
    location: "Warsaw, Poland",
    gla: "Representative retail-led scheme",
    year: "—",
    excerpt:
      "Illustrative retail-led development — parking demand, access layout, and servicing strategy typical of schemes we support.",
  },
  {
    slug: "__map-sample-krakow",
    title: "Mixed-use development (illustrative)",
    type: "Traffic study — sample location",
    filterSlug: "sample-traffic",
    lat: 50.0647,
    lng: 19.945,
    mapOnly: true,
    location: "Kraków, Poland",
    gla: "Mixed-use (retail / office / residential)",
    year: "—",
    excerpt:
      "Illustrative city-centre mixed-use project — traffic generation, distribution of trips, and access design across uses.",
  },
  {
    slug: "__map-sample-berlin",
    title: "Logistics / industrial (illustrative)",
    type: "Site access — sample location",
    filterSlug: "sample-logistics",
    lat: 52.52,
    lng: 13.405,
    mapOnly: true,
    location: "Berlin, Germany",
    gla: "Industrial / logistics footprint",
    year: "—",
    excerpt:
      "Illustrative logistics or industrial estate — HGV access, circulation, and junction capacity for freight movements.",
  },
  {
    slug: "__map-sample-prague",
    title: "Urban regeneration (illustrative)",
    type: "Transport planning — sample location",
    filterSlug: "sample-traffic",
    lat: 50.0755,
    lng: 14.4378,
    mapOnly: true,
    location: "Prague, Czechia",
    gla: "Urban regeneration area",
    year: "—",
    excerpt:
      "Illustrative regeneration masterplan — walking, cycling, public transport links, and car parking policy.",
  },
  {
    slug: "__map-sample-bratislava",
    title: "Commercial car park (illustrative)",
    type: "Parking layout — sample location",
    filterSlug: "sample-parking",
    lat: 48.1486,
    lng: 17.1077,
    mapOnly: true,
    location: "Bratislava, Slovakia",
    gla: "Structured / surface parking",
    year: "—",
    excerpt:
      "Illustrative commercial parking facility — bay layout, peak demand, and pedestrian links to the host building.",
  },
];

/**
 * Add real portfolio entries here (or replace with CMS fetch later).
 * Each project gets a listing card, map marker, and /projects/[slug] page.
 */
export const PROJECTS: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getMapSampleBySlug(slug: string): MapOnlyProject | undefined {
  return MAP_ONLY_PROJECTS.find((p) => p.slug === slug);
}

export function getProjectTypeFilters(): { slug: string; label: string }[] {
  const seen = new Set<string>();
  const out: { slug: string; label: string }[] = [];
  for (const p of PROJECTS) {
    if (seen.has(p.typeSlug)) continue;
    seen.add(p.typeSlug);
    out.push({ slug: p.typeSlug, label: p.type });
  }
  return out.sort((a, b) => a.label.localeCompare(b.label));
}

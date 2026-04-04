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

export const PROJECTS: Project[] = [
  {
    slug: "manufaktura-lodz",
    title: "Manufaktura Łódź",
    type: "Retail",
    typeSlug: "retail",
    year: "2018",
    location: "Łódź, Poland",
    gla: "110,000 m²",
    lat: 51.7789,
    lng: 19.4455,
    excerpt:
      "Major retail-led regeneration in the heart of Łódź, combining heritage mill buildings with new commercial space and public realm.",
  },
  {
    slug: "galeria-mlociny",
    title: "Galeria Młociny",
    type: "Retail",
    typeSlug: "retail",
    year: "2017",
    location: "Warsaw, Poland",
    gla: "75,000 m²",
    lat: 52.2974,
    lng: 20.9025,
    excerpt:
      "Large-format retail and leisure scheme in north-west Warsaw with complex access, parking, and public transport integration.",
  },
  {
    slug: "bonarka-krakow",
    title: "Bonarka",
    type: "Retail",
    typeSlug: "retail",
    year: "2017",
    location: "Kraków, Poland",
    gla: "92,000 m²",
    lat: 50.023,
    lng: 19.9755,
    excerpt:
      "Regional shopping centre serving Kraków with detailed traffic assessments and delivery strategy.",
  },
  {
    slug: "ozas-vilnius",
    title: "Ozas Vilnius",
    type: "Retail",
    typeSlug: "retail",
    year: "2018",
    location: "Vilnius, Lithuania",
    gla: "60,000 m²",
    lat: 54.712,
    lng: 25.2797,
    excerpt:
      "Retail and leisure development in Vilnius with junction capacity and pedestrian connectivity focus.",
  },
  {
    slug: "echo-tymienieckiego",
    title: "Echo Tymienieckiego",
    type: "Mixed Use",
    typeSlug: "mixed-use",
    year: "2018",
    location: "Łódź, Poland",
    gla: "136,000 m²",
    lat: 51.7465,
    lng: 19.4517,
    excerpt:
      "Mixed retail, office, and residential scheme requiring coordinated transport modelling and access design.",
  },
  {
    slug: "golf-spa-warsaw",
    title: "Golf & Spa",
    type: "Residential",
    typeSlug: "residential",
    year: "2018",
    location: "Warsaw, Poland",
    gla: "13,000 m²",
    lat: 52.18,
    lng: 20.95,
    excerpt:
      "Residential and leisure development with emphasis on local network impacts and site access.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
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

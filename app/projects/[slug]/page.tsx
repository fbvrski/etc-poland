import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectMap from "@/components/projects/ProjectMap";
import {
  getMapSampleBySlug,
  getProjectBySlug,
  MAP_ONLY_PROJECTS,
  PROJECTS,
} from "@/lib/projects";

export function generateStaticParams() {
  return [
    ...PROJECTS.map((p) => ({ slug: p.slug })),
    ...MAP_ONLY_PROJECTS.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (project) {
    return {
      title: `${project.title} — ETC Polska`,
      description: project.excerpt,
    };
  }
  const sample = getMapSampleBySlug(slug);
  if (sample) {
    return {
      title: `${sample.title} — ETC Polska`,
      description: sample.excerpt,
    };
  }
  return { title: "Project — ETC Polska" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const sample = project ? undefined : getMapSampleBySlug(slug);

  if (!project && !sample) notFound();

  const isSample = Boolean(sample);
  const title = project?.title ?? sample!.title;
  const type = project?.type ?? sample!.type;
  const excerpt = project?.excerpt ?? sample!.excerpt;
  const location = project?.location ?? sample!.location;
  const gla = project?.gla ?? sample!.gla;
  const year = project?.year ?? sample!.year;
  const lat = project?.lat ?? sample!.lat;
  const lng = project?.lng ?? sample!.lng;
  const mapSlug = project?.slug ?? sample!.slug;

  const mapPoint = {
    slug: mapSlug,
    title,
    type,
    lat,
    lng,
    mapOnly: isSample,
    showPopupCta: false,
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] py-16 text-white">
        <div className="container-custom">
          <nav className="mb-6 text-sm text-white/80">
            <Link href="/projects" className="hover:text-white hover:underline">
              ← All projects
            </Link>
          </nav>
          {isSample ? (
            <p className="mb-4 max-w-2xl rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/90">
              <strong className="text-white">Illustrative sample.</strong> This page shows how a case study will look
              once real projects are published — it is not a live client scheme.
            </p>
          ) : null}
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7eb8ff]">{type}</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-lg text-white/90">{excerpt}</p>
          <dl className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <dt className="text-white/60">Location</dt>
              <dd className="font-semibold text-white">{location}</dd>
            </div>
            <div>
              <dt className="text-white/60">GLA</dt>
              <dd className="font-semibold text-white">{gla}</dd>
            </div>
            <div>
              <dt className="text-white/60">Year</dt>
              <dd className="font-semibold text-white">{year}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-4 text-2xl font-extrabold">Overview</h2>
          <div className="prose-custom space-y-4">
            <p>{excerpt}</p>
            <p className="text-gray-600">
              ETC Polska provides transport and traffic planning for developments of this kind — access, parking,
              junction capacity, and liaison with highways and planning authorities as required.
            </p>
            {isSample ? (
              <p className="text-gray-600">
                <Link href="/contact" className="font-semibold text-[#0F2D8A] hover:underline">
                  Contact us
                </Link>{" "}
                to discuss a comparable instruction.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-muted section !pt-0">
        <div className="container-custom">
          <h2 className="mb-4 text-xl font-bold">Location</h2>
          <ProjectMap projects={[mapPoint]} />
        </div>
      </section>
    </main>
  );
}

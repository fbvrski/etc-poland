import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectMap from "@/components/projects/ProjectMap";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project — ETC Polska" };
  }
  return {
    title: `${project.title} — ETC Polska`,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const mapPoint = {
    slug: project.slug,
    title: project.title,
    type: project.type,
    lat: project.lat,
    lng: project.lng,
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
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7eb8ff]">
            {project.type}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-white/90">{project.excerpt}</p>
          <dl className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <dt className="text-white/60">Location</dt>
              <dd className="font-semibold text-white">{project.location}</dd>
            </div>
            <div>
              <dt className="text-white/60">GLA</dt>
              <dd className="font-semibold text-white">{project.gla}</dd>
            </div>
            <div>
              <dt className="text-white/60">Year</dt>
              <dd className="font-semibold text-white">{project.year}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-4 text-2xl font-extrabold">Overview</h2>
          <div className="prose-custom space-y-4">
            <p>{project.excerpt}</p>
            <p className="text-gray-600">
              ETC Polska provided transport and traffic planning inputs for this development,
              including access, parking strategy, and liaison with planning authorities as
              required.
            </p>
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

import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

const FEATURED_SLUGS = ["manufaktura-lodz", "galeria-mlociny", "ozas-vilnius"] as const;

export default function ProjectsFeatured() {
  const projects = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
    Boolean,
  ) as typeof PROJECTS;

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-display font-extrabold">Selected Projects</h2>
          <Link href="/projects" className="btn btn-secondary hidden md:inline-flex">
            View all projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#0F2D8A]/20 to-[#2E7DE0]/20 transition-opacity group-hover:opacity-90" />
                <div className="p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2E7DE0]">
                    {project.type}
                  </p>
                  <h3 className="mb-2 text-xl font-bold group-hover:text-[#0F2D8A]">{project.title}</h3>
                  <div className="flex items-center gap-4 border-t border-gray-200 pt-4 text-sm text-gray-600">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="btn btn-secondary">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}

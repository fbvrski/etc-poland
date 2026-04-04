"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getProjectTypeFilters, type Project } from "@/lib/projects";
import ProjectMap from "./ProjectMap";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
        <div className="aspect-video bg-gradient-to-br from-[#0F2D8A]/20 to-[#2E7DE0]/20 transition-opacity group-hover:opacity-90" />
        <div className="p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2E7DE0]">
            {project.type}
          </p>
          <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#0F2D8A]">
            {project.title}
          </h2>
          <p className="mb-1 text-sm text-gray-600">{project.location}</p>
          <p className="mb-1 text-sm text-gray-600">GLA: {project.gla}</p>
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="text-sm text-gray-600">{project.year}</span>
            <span className="text-sm font-semibold text-[#2E7DE0]">View →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ProjectsArchive({ projects }: { projects: Project[] }) {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const typeOptions = useMemo(() => getProjectTypeFilters(), []);

  const filtered = useMemo(() => {
    if (typeFilter === "all") return projects;
    return projects.filter((p) => p.typeSlug === typeFilter);
  }, [projects, typeFilter]);

  const mapProjects = useMemo(
    () =>
      filtered.map((p) => ({
        slug: p.slug,
        title: p.title,
        type: p.type,
        lat: p.lat,
        lng: p.lng,
      })),
    [filtered],
  );

  return (
    <>
      <section className="section pb-8 pt-0">
        <div className="container-custom">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Filter by project type. Click a marker or card to open the project page.
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              <button
                type="button"
                onClick={() => setTypeFilter("all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  typeFilter === "all"
                    ? "bg-[#0F2D8A] text-white"
                    : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-[#EEF2F8]"
                }`}
              >
                All
              </button>
              {typeOptions.map((opt) => (
                <button
                  key={opt.slug}
                  type="button"
                  onClick={() => setTypeFilter(opt.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    typeFilter === opt.slug
                      ? "bg-[#0F2D8A] text-white"
                      : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-[#EEF2F8]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <ProjectMap projects={mapProjects} />
        </div>
      </section>

      <section className="section-muted section !pt-0">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-gray-600">No projects in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

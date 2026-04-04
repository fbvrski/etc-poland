"use client";

import { useMemo, useState } from "react";
import {
  getMapSampleTypeFilters,
  getProjectTypeFilters,
  MAP_ONLY_PROJECTS,
  type Project,
} from "@/lib/projects";
import ProjectMap, { type MapProject } from "./ProjectMap";

function filterButtonClass(active: boolean) {
  return `rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
    active
      ? "bg-[#0F2D8A] text-white shadow-sm"
      : "bg-white text-gray-700 shadow-sm ring-1 ring-gray-200/80 hover:bg-white hover:ring-[#0F2D8A]/25"
  }`;
}

export default function ProjectsArchive({ projects }: { projects: Project[] }) {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const hasProjects = projects.length > 0;

  const typeOptions = useMemo(
    () => (hasProjects ? getProjectTypeFilters() : getMapSampleTypeFilters()),
    [hasProjects],
  );

  const filtered = useMemo(() => {
    if (typeFilter === "all") return projects;
    return projects.filter((p) => p.typeSlug === typeFilter);
  }, [projects, typeFilter]);

  const mapProjects = useMemo((): MapProject[] => {
    if (hasProjects) {
      return filtered.map((p) => ({
        slug: p.slug,
        title: p.title,
        type: p.type,
        lat: p.lat,
        lng: p.lng,
        detailHref: `/projects/${p.slug}`,
        detailLabel: "View project details",
      }));
    }

    const samples = MAP_ONLY_PROJECTS.filter(
      (p) => typeFilter === "all" || p.filterSlug === typeFilter,
    );

    return samples.map((p) => ({
      slug: p.slug,
      title: p.title,
      type: p.type,
      lat: p.lat,
      lng: p.lng,
      mapOnly: true,
      detailHref: `/projects/${p.slug}`,
      detailLabel: "View project details",
    }));
  }, [filtered, hasProjects, typeFilter]);

  return (
    <>
      <section className="border-t border-[#0F2D8A]/10 bg-[#EEF2F8] pb-8 pt-6 md:pt-8">
        <div className="container-custom">
          <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <p className="max-w-xl text-sm leading-relaxed text-gray-600">
              {hasProjects
                ? "Filter by type, then open a marker popup to view project details."
                : "Filter sample locations by focus area. Each pin opens an illustrative project detail page — swap in real case studies when your portfolio is ready."}
            </p>
            <div
              className="flex flex-shrink-0 flex-wrap gap-2"
              role="group"
              aria-label="Filter map locations"
            >
              <button
                type="button"
                onClick={() => setTypeFilter("all")}
                className={filterButtonClass(typeFilter === "all")}
              >
                All
              </button>
              {typeOptions.map((opt) => (
                <button
                  key={opt.slug}
                  type="button"
                  onClick={() => setTypeFilter(opt.slug)}
                  className={filterButtonClass(typeFilter === opt.slug)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <ProjectMap projects={mapProjects} />
        </div>
      </section>
    </>
  );
}

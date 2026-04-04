import type { Metadata } from "next";
import ProjectsArchive from "@/components/projects/ProjectsArchive";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — ETC Polska",
  description:
    "Selected transport and traffic planning projects across Europe, Middle East, and Central Asia.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] py-14 text-white md:py-16">
        <div className="container-custom">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Selected transport and traffic planning projects across Europe and beyond.
          </p>
        </div>
      </section>

      <ProjectsArchive projects={PROJECTS} />
    </main>
  );
}

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
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] py-16 text-white">
        <div className="container-custom">
          <h1 className="mb-4 text-5xl font-extrabold">Projects</h1>
          <p className="max-w-2xl text-xl text-white/90">
            Selected transport and traffic planning projects across Europe and beyond.
          </p>
        </div>
      </section>

      <ProjectsArchive projects={PROJECTS} />
    </main>
  );
}

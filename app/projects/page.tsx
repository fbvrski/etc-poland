import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — ETC Polska",
  description: "Selected transport and traffic planning projects across Europe, Middle East, and Central Asia.",
};

export default function ProjectsPage() {
  const projects = [
    { title: "Manufaktura Łódź", type: "Retail", year: "2018", location: "Łódź, Poland", gla: "110,000 m²" },
    { title: "Galeria Młociny", type: "Retail", year: "2017", location: "Warsaw, Poland", gla: "75,000 m²" },
    { title: "Bonarka", type: "Retail", year: "2017", location: "Krakow, Poland", gla: "92,000 m²" },
    { title: "Ozas Vilnius", type: "Retail", year: "2018", location: "Vilnius, Lithuania", gla: "60,000 m²" },
    { title: "Echo Tymienieckiego", type: "Mixed Use", year: "2018", location: "Łódź, Poland", gla: "136,000 m²" },
    { title: "Golf & Spa", type: "Residential", year: "2018", location: "Warsaw, Poland", gla: "13,000 m²" },
  ];

  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-display font-extrabold mb-4">Projects</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Selected transport and traffic planning projects across Europe and beyond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <article key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#0F2D8A]/20 to-[#2E7DE0]/20" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2E7DE0] mb-2">{project.type}</p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{project.location}</p>
                  <p className="text-sm text-gray-600 mb-1">GLA: {project.gla}</p>
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <span className="text-sm text-gray-600">{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

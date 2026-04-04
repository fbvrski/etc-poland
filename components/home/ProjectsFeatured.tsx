import Link from "next/link";

export default function ProjectsFeatured() {
  const projects = [
    {
      title: "Manufaktura Łódź",
      type: "Retail",
      location: "Łódź, Poland",
      year: "2018",
      image: "/images/placeholder-project.jpg",
    },
    {
      title: "Galeria Młociny",
      type: "Retail",
      location: "Warsaw, Poland",
      year: "2017",
      image: "/images/placeholder-project.jpg",
    },
    {
      title: "Ozas Vilnius",
      type: "Retail",
      location: "Vilnius, Lithuania",
      year: "2018",
      image: "/images/placeholder-project.jpg",
    },
  ];

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
          {projects.map((project, i) => (
            <article key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-[#0F2D8A]/20 to-[#2E7DE0]/20" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E7DE0] mb-2">
                  {project.type}
                </p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </article>
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

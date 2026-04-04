import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      icon: "🎯",
      title: "Development Advice",
      excerpt: "Early-stage site selection, feasibility studies, and transport strategy.",
      url: "/services",
    },
    {
      icon: "🚚",
      title: "Traffic & Transport Planning",
      excerpt: "Detailed traffic modeling, access design, parking, and public transport integration.",
      url: "/services",
    },
    {
      icon: "🏗️",
      title: "Infrastructure Design",
      excerpt: "Road layouts, junctions, pedestrian zones, and delivery areas.",
      url: "/services",
    },
  ];

  return (
    <section className="section section-muted">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-display font-extrabold mb-4">What We Do</h2>
          <p className="text-lg text-gray-600">
            Expert consultancy from site selection to detailed transport planning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.excerpt}</p>
              <Link href={service.url} className="text-[#0F2D8A] font-semibold text-sm hover:underline">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

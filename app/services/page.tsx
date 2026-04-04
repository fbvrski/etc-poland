import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — ETC Polska",
  description: "Development advice, traffic planning, and infrastructure design for major projects across Europe.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Development Advice",
      items: [
        "Site selection studies",
        "Transport feasibility",
        "Planning strategy",
        "Access appraisals",
        "Traffic impact assessments",
      ],
    },
    {
      title: "Traffic & Transport Planning",
      items: [
        "Traffic modeling and forecasting",
        "Junction design and capacity analysis",
        "Parking strategy and layouts",
        "Public transport integration",
        "Pedestrian and cycle planning",
      ],
    },
    {
      title: "Infrastructure Design",
      items: [
        "Access road design",
        "Internal circulation layouts",
        "Delivery and service areas",
        "Pedestrian zones",
        "Junction improvements",
      ],
    },
  ];

  const process = [
    { num: "01", title: "Initial Consultation", desc: "We review your site, objectives, and planning context to define scope and approach." },
    { num: "02", title: "Analysis & Modeling", desc: "Detailed traffic surveys, baseline analysis, and forecast modeling." },
    { num: "03", title: "Design & Strategy", desc: "Access layouts, parking, public transport, and mitigation measures." },
    { num: "04", title: "Planning Submission", desc: "Transport assessments, travel plans, and liaison with highways authorities." },
  ];

  const sectors = [
    { icon: "🛒", name: "Retail", desc: "Shopping centers, retail parks, supermarkets" },
    { icon: "🏠", name: "Residential", desc: "Housing estates, apartment complexes" },
    { icon: "💼", name: "Office", desc: "Business parks, corporate campuses" },
    { icon: "📦", name: "Logistics", desc: "Distribution centers, industrial estates" },
    { icon: "🏗️", name: "Mixed Use", desc: "Integrated retail, office, residential schemes" },
    { icon: "🚊", name: "Infrastructure", desc: "Public transport, highways, urban regeneration" },
  ];

  return (
    <main>
      <section className="bg-gradient-to-br from-[#091D5E] to-[#0F2D8A] text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-display font-extrabold mb-4">Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Expert transport consultancy from site selection to delivery
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-extrabold mb-6">Our Approach</h2>
          <div className="prose-custom">
            <p>
              We work with developers and architects from the earliest stages of site selection through to detailed planning. Our services cover feasibility studies, traffic modeling, access design, parking strategy, public transport integration, and infrastructure planning.
            </p>
            <p>
              We understand the commercial drivers of development and design solutions that meet planning requirements while supporting project viability.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((group, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#2E7DE0] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-display font-extrabold mb-10">How We Work</h2>
          <ol className="space-y-6">
            {process.map((step, i) => (
              <li key={i} className="flex gap-6">
                <div className="flex-shrink-0 text-4xl font-display font-extrabold text-[#2E7DE0]">{step.num}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-extrabold mb-10">Sectors We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <article key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl mb-3">{sector.icon}</div>
                <h3 className="text-lg font-bold mb-2">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
